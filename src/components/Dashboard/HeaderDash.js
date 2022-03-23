import {Box,Heading,HStack} from '@chakra-ui/react';
export const HeaderDash = (props) => {
    const {name}=props
  return(
    <HStack borderBottom='1px' borderColor='gray.200' p="3" justify="space-between">

        <Box><Heading>{name}</Heading></Box>

        <Box bg="red.100" border="1px" borderRadius={10} p="1">LOGOUT</Box>
    </HStack>
  )
};