import React from "react";
import { Box, Heading } from "@chakra-ui/core";

/*
TO-DO:
=====
1. Review solutions for displaying AWS S3 Objects w/ GraphQL Datasets
2. Import data to block & create listing component
*/


const Dashboard = () => {
    return(
        <div id="ms-dashboard">
            <Heading
                textAlign="center" 
                bg="Black"
                color="#ff8b0f"
                ml="40%"
                mr="40%"
                p="8px"
                borderWidth="3px"
                borderRadius="10px"
            >
                Dashboard
            </Heading>
            <Box
                bg="Black"
                color="#ff8b0f"
                m="auto"
                width="1000px"
                height="400px"
                borderRadius="15px"
            >
                
            </Box>
        </div>
    )
}

export default Dashboard