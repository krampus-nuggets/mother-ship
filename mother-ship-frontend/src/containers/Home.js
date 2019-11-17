import React from "react";
import { Grid } from "@chakra-ui/core";
import Card from "../components/Card";
import { float } from "../styles/styles";
import "../styles/styles.css";

const Home = () => {
    return(
        <div id="ms-home" className="ms-body-width ms-body-components">
            <Grid 
                className="ms-body-width"
                width="1440px"
                height="600px"
                templateColumns="repeat(2,1fr)"
                templateRows="repeat(1,1fr)"
                gridAutoFlow="row dense"
                gap={5}
            >
                <Card
                    id="card-row-one"
                    href="/SignUp"
                    animation={ float }
                    title="Register"
                    imageSRC="https://res.cloudinary.com/wemakeart/image/upload/v1573308687/mother-ship/upload-file_wde7mi.svg"
                />
                <Card
                    id="card-row-two"
                    href="/Login"
                    animation={ float }
                    title="Login"
                    imageSRC="https://res.cloudinary.com/wemakeart/image/upload/v1573316252/mother-ship/your-file_wqvlxp.svg"
                />
            </Grid>
        </div>
    )
}

export default Home;