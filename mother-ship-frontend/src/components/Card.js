import React from "react";
import { Box, Image, Heading } from "@chakra-ui/core";

const Card = (props) => {
    return(
        <Box margin="auto" animation={ props.animation } height="40%" width="45%" pt="35px" bg="#ff8b0f" rounded="lg" overflow="hidden">
            <Image 
                className="ms-image-center"
                src={ props.imageSRC }
                width="150px"
                height="150px"
                alt="upload-file"
            />
            <Box>
                <Heading class="ms-nav-head" size="md" textAlign="center" rounded="md" bg="black" color="#ff8b0f" p={2} >
                    { props.title }
                </Heading>
            </Box>
        </Box>
    )
}

export default Card