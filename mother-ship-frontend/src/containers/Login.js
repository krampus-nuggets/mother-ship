import React from "react";
import { FormHelperText, FormLabel, FormControl, Button, Input, Heading, Box, Link } from "@chakra-ui/core";
import "../styles/styles.css";

const Login = () => {
    return(
        <div id="ms-login">
            <Box
                m="8% 35% 10% 35%"
                display="block"
                color="white"
            >
                <Heading>Login</Heading>
                <form size="md">
                    <FormControl size="md">
                        <FormLabel>Email Address</FormLabel>
                            <Input
                                id="ms-login-email"
                                type="email"
                                aria-describedby="ms-login-email-helper"
                            />
                            <FormHelperText color="white" id="ms-login-email-helper">
                                Is there a keylogger running<span role="img" aria-label="I Don't Know">🤷🏾‍♂️</span>
                            </FormHelperText>
                        <FormLabel>Password</FormLabel>
                            <Input
                                id="ms-login-password"
                                type="password"
                                aria-describedby="ms-login-password-helper"
                            />
                            <FormHelperText color="white" id="ms-login-password-helper">
                                Here's a link to <Link href="https://haveibeenpwned.com/" isExternal>haveibeenpwned.com</Link> <span role="img" aria-label="Funny">😹</span>
                            </FormHelperText>
                        <Button
                            mt={ 4 }
                            bg="Black"
                            color="White"
                            type="submit"
                        >
                            Login
                        </Button>
                    </FormControl>
                </form>
            </Box>
        </div>
    )
}

export default Login