

import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import Link from "next/link";
import {
  Link as ChakraLink,
  Text,
  Box,
} from "@chakra-ui/react";
import {
  Hero,Header,
  PageContainer,
  Main,
  DarkModeSwitch,
  Footer,
} from "../components/landing/index";



export default function Index() {
  return (
    <PageContainer >
      <Header/>
      <Hero />
      <Main>
        <Box>
          <Text>Create the opportunity for a smooth tracking system</Text>
        </Box>
        <Box>
          <Text></Text>
        </Box>
      </Main >
      <Footer>
        <Text>Track it where it matters</Text>
      </Footer>

    </PageContainer>
  );}

