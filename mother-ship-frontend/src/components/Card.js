import React from "react";
import { Box, Image, Heading, Link } from "@chakra-ui/core";

const Card = (props) => {
    return(
        <Box
            margin="auto"
            animation={ props.animation }
            height="270px"
            width="45%"
            pt="35px"
            bg="#ff8b0f"
            rounded="lg"
            boxShadow="10px 10px 10px #666666"
            overflow="hidden"
        >
            <Image 
                className="ms-image-center"
                src={ props.imageSRC }
                width="150px"
                height="150px"
                alt="upload-file"
            />
            <Box>
                <Link href={ props.href } isInternal>
                <Heading
                    className="ms-nav-head"
                    width="40%"
                    mr="auto"
                    ml="auto"
                    mt="40px"
                    size="sm"
                    textAlign="center"
                    rounded="md"
                    bg="black"
                    color="#ff8b0f"
                    p={2}
                >
                    { props.title }
                </Heading>
                </Link>
            </Box>
        </Box>
    )
}

export default Card