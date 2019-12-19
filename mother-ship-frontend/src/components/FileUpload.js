import React, { useState } from "react";
import { File_Upload } from "../graphql/Mutations";
import { s3Upload } from "../res/libs/awsLib";
import { Storage } from "aws-amplify";
import { Mutation } from "react-apollo";
import { Box, Heading, FormControl, FormLabel, Select, Input, Button } from "@chakra-ui/core";
import config from "../res/configs/config";


const FileUpload = () => {
    const [ title, setTitle ] = useState("");
    let [ fileSize, setFileSize ] = useState("");
    const [ fileURL, setFileURL ] = useState("");
    const [ fileType, setFileType ] = useState("");
    let [ file ] = useState(null);
    let [ fileSize ] = useState(null);
    let [ pureFileSize ] = useState(null);

    const handleFileChange = async e => {
        file = e.target.files[0];
        pureFileSize = e.target.files[0].size;
        fileSize = humanFileSize(pureFileSize,true);
        
        // START
        // Function - Digest bytes from pureFileSize to Human Readable format
        function humanFileSize(bytes, si) {
            const threshold = si ? 1000 : 1024;

            if(Math.abs(bytes) < threshold) {
                return bytes + " B";
            }

            const units = si
                ? [ "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" ]
                : [ "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB" ];
            
            let u = -1;

            do {
                bytes /= threshold;
                ++u;
            } while(Math.abs(bytes) >= threshold && u < units.length -1);

            return bytes.toFixed(1)+"."+units[u];
        };
        // END

        try {
            fileSize = file.size;

            const attachment = file
            ?   await s3Upload(file)
            :   null;

            const fileURI = await Storage.get(`${ attachment }`, { level: "private" });

            setFileURL(`${ fileURI }`);

            setFileSize(`${ file.size }`);

            console.log(file);
            alert(`Upload created with file -> ${ attachment } `)
        }
        catch(e) {
            alert(e);
        }
    }

    const handleSubmit = async e => {
        if ( file && file.size > config.s3.SIZE ) {
            alert(
                `WARNING - File must be smaller than ${ config.MAX_ATTACHMENT_SIZE/1000000 }MB`
            );
        }
    }

    return(
        <div id="ms-file-upload">
            <Box
                m="5% 35% 10% 35%"
                display="block"
                color="White"
            >
                <Heading>Upload File</Heading>
                <Mutation
                    variables={{
                        title,
                        fileURL,
                        fileType
                    }}
                    mutation={ File_Upload }
                >
                    { (fileUpload, { data }) => (
                        <form
                            onSubmit = {
                                async e => {
                                    e.preventDefault();
                                    await fileUpload();
                                    handleSubmit();
                                }
                            }
                        >
                            <FormControl size="md">
                                <FormLabel pb={ 3 }>Filename</FormLabel>
                                    <Input
                                        id="ms-file-upload-input"
                                        type="text"
                                        placeholder="Please set filename..."
                                        width="400px"
                                        isRequired
                                        value={ title }
                                        onChange={ e => setTitle( e.target.value ) }
                                    />
                                <FormLabel pt={ 3 } pb={ 3 }>File Type</FormLabel>
                                    <Select
                                        id="ms-file-upload-type"
                                        placeholder="Please select the file type..."
                                        width="430px"
                                        isRequired
                                        value={ fileType }
                                        onChange={ e => setFileType( e.target.value ) }
                                    >
                                        <option>Audio</option>
                                        <option>Video</option>
                                        <option>Document</option>
                                        <option>Compressed</option>
                                    </Select>
                                <FormLabel pt={ 3 } pb={ 3 }>Select File</FormLabel>
                                    <Input
                                        id="ms-file-upload-select"
                                        type="file"
                                        placeholder=".Please select your file..."
                                        width="400px"
                                        onChange={ handleFileChange }
                                    />
                                <Button
                                    id="ms-file-upload-submit"
                                    type="submit"
                                    color="White"
                                    bg="Black"
                                    mt="15px"
                                    _onhover={{ color: "Black", bg: "White" }}
                                >
                                    Submit
                                </Button>
                            </FormControl>
                        </form>
                    )}
                </Mutation>
            </Box>
        </div>
    )
}

export default FileUpload;