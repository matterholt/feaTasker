import {Text,Box,Heading,HStack} from '@chakra-ui/react';
export const HeaderDash = (props) => {
    const {username}=props
  return(
    <HStack bg="blue.900" borderBottom='1px' borderColor='gray.200' p="3" justify="space-between">


<Text color="white"  fontSize="xs">DATE: 09-10-22</Text>

    </HStack>
  )
};