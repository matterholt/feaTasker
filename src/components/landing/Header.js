import {
  Link as ChakraLink,
  Box,HStack
} from "@chakra-ui/react";

import { DarkModeSwitch } from "./DarkModeSwitch";

const InternalLink = (props)=>{
    const {linkTo, title,cssStyle}=props
    const {bgCustom,colorCustom="black"}=cssStyle
    return(
        <ChakraLink href={linkTo} flexGrow={1} mr={2}  >
            <Box bg={bgCustom} color={colorCustom} p="2" borderRadius='lg'  borderWidth='1px' borderColor={colorCustom}>
             {title}
            </Box>
          </ChakraLink>
    )
}


export const Header =()=>{
    return(
        <HStack bg="blue.500" w="full" h="20" p="10" justify="space-between">
            <h1>FEA Tasker</h1>
            <HStack>
                <InternalLink linkTo="./Login" title="LOG ON" cssStyle={{bgCustom:"whiteAlpha.400", colorCustom:"gray.800"}}/>
                <InternalLink linkTo="./Signup" title="SIGN UP" cssStyle={{bgCustom:"whiteAlpha.700"}}/>
            </HStack>
  
        </HStack>
    )
}