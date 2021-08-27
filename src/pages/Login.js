import {useState} from 'react'
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
function Login() {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Email: ${email}`);
    };
  return (
    <Container w="100vw" h="100vh">
      <ChakraLink href="/" flexGrow={1} mr={2}>
        Home
      </ChakraLink>
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="test@test.com"
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
            </FormControl>
            <Button width="full" mt={4} type="submit">
              Sign In
            </Button>
          </form>
        </Box>
      </Flex>
    </Container>
  );
}

export default Login;
