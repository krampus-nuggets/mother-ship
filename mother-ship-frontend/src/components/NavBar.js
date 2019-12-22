import React from "react";
import { Box, Link, Heading } from "@chakra-ui/core";

const NavBar = () => {
    return(
        <div id="ms-nav-bar">
            <Box
              width="15%"
              display="flex"
              justifyContent="space-between"
              bg="white"
              roundedBottomLeft="15px"
              roundedBottomRight="15px"
              m="0 auto 0 auto  "
              p={ 1 }
              color="white"
            >
              <Link href="/" m="auto" isInternal>
                <Heading className="ms-nav-head" color="black" rounded="md" p={ 2 } size="md" textAlign="center">
                  Mother-Ship
                </Heading>
              </Link>
            </Box>
        </div>
    )
}

export default NavBar