import React from "react";
import { Grid, Link } from "@chakra-ui/core";

const LowerNav = () => {
    return(
        <div id="ms-lower-nav">
            <Grid
                className="ms-body-width"
                width="100%"
                pt={ 15 }
                mb={ 30 }
                templateColumns="repeat(3,1fr)"
                templateRows="repeat(1,1fr)"
                gridAutoFlow="row dense"
                gap={5}
            >
                <Link
                    href="/UploadFile"
                    mr="auto"
                    ml="auto"
                    fontWeight="bold"
                    fontSize="md"
                    p={ 3 }
                    bg="Black"
                    color="White"
                    border={ 0 }
                    borderRadius={ 5 }
                    _hover={{ color: "Black", bg: "White" }}
                >
                    Upload File
                </Link>
                <Link
                    href="/Dashboard"
                    mr="auto"
                    ml="auto"
                    fontWeight="bold"
                    fontSize="md"
                    p={ 3 }
                    bg="Black"
                    color="White"
                    border={ 0 }
                    borderRadius={ 5 }
                    _hover={{ color: "Black", bg: "White" }}
                >
                    Dashboard
                </Link>
                <Link
                    href="/#"
                    mr="auto"
                    ml="auto"
                    fontWeight="bold"
                    fontSize="md"
                    p={ 3 }
                    bg="Black"
                    color="White"
                    border={ 0 }
                    borderRadius={ 5 }
                    _hover={{ color: "Black", bg: "White" }}
                >
                    Your Profile
                </Link>
            </Grid>
        </div>
    )
}

export default LowerNav
