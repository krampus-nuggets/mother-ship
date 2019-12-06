import React, { useState } from "react";
import { File_Upload } from "../graphql/Mutations";
import { s3Upload } from "../res/libs/awsLib";
import { Storage } from "aws-amplify";
import { Mutation } from "react-apollo";
import { Box, Heading, FormControl, FormLabel, Select, Input, Button } from "@chakra-ui/core";
import config from "../res/configs/config";


const FileUpload = () => {
    return(
        <div id="ms-file-upload">
            <Box
                m="5% 35% 10% 35%"
                display="block"
                color="White"
            >
                <Heading>Upload File</Heading>
                <FormControl size="md">
                    <FormLabel pb={ 3 }>Filename</FormLabel>
                        <Input
                            id="ms-file-upload-input"
                            type="text"
                            placeholder="Please set filename..."
                            width="400px"
                            isRequired
                        />
                    <FormLabel pt={ 3 } pb={ 3 }>File Type</FormLabel>
                        <Select
                            id="ms-file-upload-type"
                            placeholder="Please select the file type..."
                            width="430px"
                            isRequired
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
                            isRequired
                        />
                    <Button
                        id="ms-file-upload-submit"
                        type="Submit"
                        color="White"
                        bg="Black"
                        mt="15px"
                        _onhover={{ color: "Black", bg: "White" }}
                    >
                        Submit
                    </Button>
                </FormControl>
            </Box>
        </div>
    )
}

export default FileUpload;