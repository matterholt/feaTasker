import { Link as ChakraLink, Text, Center, Box } from "@chakra-ui/react";
function Login() {
  return (
      <Center w="100vw" h="100vh">
          <Box>

      <Text fontSize="5xl">login in Page</Text>
      <ChakraLink href="/" flexGrow={1} mr={2}>
        Home
      </ChakraLink>
          </Box>
    </Center>
  );
}

export default Login;
