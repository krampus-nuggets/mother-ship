import React from "react";
import { FormHelperText, FormLabel, FormControl, Button, Input, Heading, Box } from "@chakra-ui/core";
import "../styles/styles.css";

//const SignUp = () => {
    // Addition Func - Later
    // ******
    const SignUp = () => {
        return(
            <div
                id="ms-signup"
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

    //return(
      //  <div id="ms-signup" className="ms-body-width">
          //  {
        //        RenderForm
           // }
        //</div>
    //)
//}

export default SignUp