import React from "react";
import { Box, Button, Heading, Link } from "@chakra-ui/core";

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
                height="550px"
                borderRadius="15px"
            >
                
            </Box>
        </div>
    )
}

export default Dashboard