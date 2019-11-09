import React from "react";
import { Box, Heading, Image } from "@chakra-ui/core";
import Card from "../components/Card";
import "../styles/styles.css";

const Home = () => {
    return(
        <div id="ms-home">
            <Box>
                <Card
                    id="card-row-one" 
                    title="Upload File"
                    imageSRC="https://res.cloudinary.com/wemakeart/image/upload/v1573308687/mother-ship/upload-file_wde7mi.svg"
                />
            </Box>
        </div>
    )
}

export default Home;