import { CmRequestRow } from './CmRequestRow';
import { CmRequestHeadings } from './CmRequestHeadings';
import { VStack,Heading } from '@chakra-ui/react';




export const CmRequest_listView = (props) => {
  const { cmRequest } = props;

  
  return (
    <VStack justify="start" alignItems="start" m="15px">
      
      <CmRequestHeadings />
      {cmRequest.map((model) => (
        <CmRequestRow model={model}  key={model.id}/>
      ))}
   
    </VStack>
  );
};
