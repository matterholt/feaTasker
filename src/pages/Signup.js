import { useState } from 'react'
import { signIn, signOut, useSession } from "next-auth/client";

import {
  Link as ChakraLink,
  Text,
  Container,
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

/**
 * Sign up page, 
 * Free to anyone to sign up 
 * after the account is created the prompt user to file forms (company and role)
 * 
 * 
 * form requires 
 * 
 *  - name
 *  - email
 *  - company, if company is on the the paid plan then request admin to add email or invite
 *  - 
 * 
 * @returns 
 */

const Form = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
        fetch()
        event.preventDefault();
        alert(`Email: ${email}`);
      };
  
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="test@test.com"
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
      </FormControl>
      {/* <Button width="full" mt={4} type="submit">
        Sign In
      </Button> */}
    </form>
  );
}





function SignUp() {
  const [session, loading] = useSession();


  function authAndDash (name){
    console.log('hit it')
  
  }

  return (
    <Container w="100vw" h="100vh">
      <ChakraLink href="/" flexGrow={1} mr={2}>
        Home
      </ChakraLink>
      <div style={{backgroundColor:"black",color:"white", padding:"10px"}}>
        <h3>temp log in</h3>
        <label>User name</label>
        <input type="text" id="name" />
        <button onClick={()=>authAndDash("jame")} style={{margin:5, backgroundColor:"blue", padding:"10px"}}>enter</button>

      </div>
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          {!session && (
            <Box textAlign="center">
              <Heading>Sign Up</Heading>
              Not signed in <br />
              <Button onClick={() => signIn()}>Sign in</Button>
            </Box>
          )}
          {session && (
            <Box textAlign="center">
              <Heading>Sign Up</Heading>
              <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
              </>
            </Box>
          )}
        </Box>
      </Flex>
    </Container>
  );
}

export default SignUp;
