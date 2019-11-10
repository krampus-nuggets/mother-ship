import React from "react";
import { FormHelperText, FormLabel, FormControl, Button, Input, Heading, Box } from "@chakra-ui/core";
import "../styles/styles.css";

    const SignUp = () => {
    const RenderSignUpForm = () => {
        return(
            <div
                id="ms-render-signup-form"
            >
            <Box
            m="8% 35% 10% 35%"
            display="block" 
            color="White"
            >
                <Heading>Sign-Up</Heading>
                <form size="md">
                    <FormControl size="md">
                        <FormLabel> Email Address</FormLabel>
                            <Input
                                id="ms-signup-email"
                                type="email"
                                aria-describedby="ms-signup-email-helper"
                            />
                            <FormHelperText color="White" id="ms-signup-email-helper">
                            Used for spamming purposes<span role="img" aria-label="Happy">😄</span>
                            </FormHelperText>
                        <FormLabel>Password</FormLabel>
                            <Input
                                id="ms-signup-password"
                                type="password"
                                aria-describedby="ms-signup-password-helper"
                            />
                            <FormHelperText color="White" id="ms-signup-password-helper">
                            Used for stealing purposes<span role="img" aria-label="Happy">😄</span>
                            </FormHelperText>
                            <Button
                                mt={ 4 }
                                bg="Black"
                                color="White"
                                type="submit"
                            >
                                Confirm Signup
                            </Button>
                    </FormControl>
                </form>
            </Box>
            </div>
        )
    }

    const RenderConfirmationForm = () => {
        return(
            <div id="ms-render-confirmation-form">
                <Box
                    m="8% 35% 10% 35%"
                    display="block"
                    color="white"
                >
                    <Heading>Confirmation Code</Heading>
                    <form size="md">
                        <FormControl size="md">
                            <FormLabel>Enter Below</FormLabel>
                                <Input
                                    id="ms-confirmation-code"
                                    type="text"
                                    aria-describedby="ms-confirmation-code-helper"
                                />
                                <FormHelperText id="ms-confirmation-code-helper" color="white">
                                    We already have your details, so pffffttt<span role="img" aria-label="Laugh">😂</span>
                                </FormHelperText>
                            <Button
                                mt={ 4 }
                                bg="Black"
                                color="White"
                                type="submit"
                            >
                                Sumbit
                            </Button>
                        </FormControl>
                    </form>
                </Box>
            </div>
        )
    }

export default SignUp