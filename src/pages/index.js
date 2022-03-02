

import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from "next/link";
import {
  Link as ChakraLink,
  Text,
  Box,
} from "@chakra-ui/react";
import {
  Hero,Header,
  Container,
  Main,
  DarkModeSwitch,
  Footer,
} from "../components/landing/index";



export default function Index({ book }) {
  return (
    <Container height="100vh">
      <Header/>
      <Hero />
      <Main>
        <Box>
          <Text>Create the opportunity for a smooth tracking system</Text>

        </Box>
      </Main>

    </Container>
  );}

