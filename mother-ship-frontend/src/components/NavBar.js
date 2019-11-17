import React from "react";
import { Box, Link, Heading } from "@chakra-ui/core";

const NavBar = () => {
    return(
        <div id="ms-nav-bar">
            <Box
              width="15%"
              display="flex"
              justifyContent="space-between"
              bg="#ff8b0f"
              roundedBottomLeft="15px"
              roundedBottomRight="15px"
              m="0 auto 0 auto  "
              p={ 2 }
              color="white"
            >
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