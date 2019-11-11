import React from "react";
import { Box, Link, Heading } from "@chakra-ui/core";

const NavBar = () => {
    return(
        <div id="ms-nav-bar">
            <Box display="flex" justifyContent="space-between" bg="#ff8b0f" m={ 0 } p={ 2 } color="white">
              <Link href="/" m="auto" isInternal>
                <Heading className="ms-nav-head" bg="black" color="#ff8b0f" rounded="md" p={ 2 } size="md" textAlign="center">
                  Mother-Ship
                </Heading>
              </Link>
            </Box>
        </div>
    )
}

export default NavBar