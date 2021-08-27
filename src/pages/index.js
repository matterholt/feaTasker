

import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from "next/link";
import {
  Link as ChakraLink,
  Text,
  Box,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import {
  Hero,
  Container,
  Main,
  DarkModeSwitch,
  Footer,
} from "../components/index";



export default function Index({ book }) {
  return(
  <Container height="100vh">
    <Hero />
    <Main>
      <Box>

        <Text>Create the opportunity for a smooth tracking system</Text>
        <ChakraLink href="./Book" flexGrow={1} mr={2}>
          Login-book
        </ChakraLink>
      </Box>
    </Main>

    <DarkModeSwitch />
  </Container>
)}

