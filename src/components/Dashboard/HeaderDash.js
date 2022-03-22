import {Box,Heading,HStack} from '@chakra-ui/react';
export const HeaderDash = (props) => {
    const {name}=props
  return(
    <HStack bg="gray.300" p="3">

        <Box><Heading>{name}</Heading></Box>

        <Box bg="white">LOGOUT</Box>
    </HStack>
  )
};