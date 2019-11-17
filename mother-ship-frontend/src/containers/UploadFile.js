import React from "react";
import { Box, Input, Heading, FormControl, FormLabel, Select, Button } from "@chakra-ui/core";

const UploadFile = () => {
    return(
        <div id="ms-upload-file">
            <Box
                m="5% 35% 10% 35%"
                display="block"
                color="White"
            >
                <Heading>
                    Upload File
                </Heading>
                <FormControl size="md">
                    <FormLabel pb={ 3 }>Filename</FormLabel>
                        <Input
                            id="ms-file-name"
                            type="text"
                            color="Black"
                            placeholder="Input the filename..."
                            width="100%"
                            isRequired
                        />
                    <FormLabel pt={ 3 } pb={ 3 }>File Type</FormLabel>
                        <Select
                            id="ms-file-type"
                            placeholder="Select a file type..."
                            width="100%"
                            isRequired
                        >
                            <option>Audio</option>
                            <option>Video</option>
                            <option>Document</option>
                            <option>Compressed</option>
                        </Select>
                    <FormLabel pt={ 3 } pb={ 3 }>Select Your File</FormLabel>
                        <Input
                            id="ms-file-input"
                            type="file"
                            color="Black"
                            isRequired
                        />
                    <Button
                        id="ms-upload-file-submit"
                        type="submit"
                        color="White"
                        bg="Black"
                        _hover={{ color: "Black", bg: "White" }}
                        mt={ 3 }
                    >
                        Submit
                    </Button>
                </FormControl>
            </Box>
        </div>
    )
}

export default UploadFile
