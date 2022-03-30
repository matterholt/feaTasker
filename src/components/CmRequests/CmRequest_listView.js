import { CmRequestRow } from './CmRequestRow';
import { CmRequestHeadings } from './CmRequestHeadings';
import { VStack,Heading ,Text, Button, HStack, Box} from '@chakra-ui/react';





const CMDataView = (props)=>{
  const {cmRequest}= props


  if(cmRequest.length > 0){
    return cmRequest.map((model) => (<CmRequestRow model={model}  key={model.id}/>))
  }else{
    return(
      <VStack justifyContent="center" alignItems="center" bg="red.400"  overflowY="scroll">

        <Heading textAlign="center">No Counter Measures</Heading>
        <Button>ADD NEW CM</Button>

      </VStack>
    )
}
}

export const CmRequest_listView = (props) => {
  const { cmRequest } = props;

  
  return (
    <VStack justify="start" alignItems="start" m="15px">
        <HStack bg="blue.800" w="full" p="2">
        <Button size='xs' w="75px" colorScheme='blue' variant='outline'  borderRadius="sm" color="white"><Text fontSize="xs">ONE</Text></Button>
        <Button size='xs' w="75px" colorScheme='blue' variant='outline'  borderRadius="sm" color="white"><Text fontSize="xs">ONE</Text></Button>
        <Button size='xs' w="75px" colorScheme='blue' variant='outline'  borderRadius="sm" color="white"><Text fontSize="xs">ONE</Text></Button>
        <Button size='xs' w="75px" colorScheme='blue' variant='outline'  borderRadius="sm" color="white"><Text fontSize="xs">ONE</Text></Button>
      </HStack>
      
      <CmRequestHeadings />

      <CMDataView cmRequest={cmRequest}/>

   
    </VStack>
  );
};
