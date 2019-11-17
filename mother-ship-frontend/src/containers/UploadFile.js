import React from "react";
import { Box, Input, Heading, FormControl, FormLabel, Select, Button } from "@chakra-ui/core";

const UploadFile = () => {
    return(
        <div id="ms-upload-file">
            <Box
                m="8% 35% 10% 35%"
                display="block"
                color="White"
            >
                <form size="md">
                    <Heading>
                        Upload File
                    </Heading>
                    <FormControl size="md">
                        <FormLabel>Select Your File</FormLabel>
                            <Input
                                id="ms-file-input"
                                type="file"
                            />
                    </FormControl>
                </form>
            </Box>
        </div>
    )
}

export default UploadFile
