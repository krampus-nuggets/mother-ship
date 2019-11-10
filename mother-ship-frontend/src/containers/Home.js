import React from "react";
import { Grid } from "@chakra-ui/core";
import Card from "../components/Card";
import { float } from "../styles/styles";
import "../styles/styles.css";

const Home = () => {
    return(
        <div id="ms-home" clasName="ms-body-width">
            <Grid 
                className="ms-home-grid ms-body-width"
                width="1440px"
                templateColumns="repeat(2,1fr)"
                templateRows="repeat(1,1fr)"
                gridAutoFlow="row dense"
                gap={5}
            >
                <Card
                    id="card-row-one" 
                    animation={ float }
                    title="Upload File"
                    imageSRC="https://res.cloudinary.com/wemakeart/image/upload/v1573308687/mother-ship/upload-file_wde7mi.svg"
                />
            </Box>
        </div>
    )
}

export default Home;