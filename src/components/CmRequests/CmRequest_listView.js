import { CmRequestRow } from './CmRequestRow';
import { CmRequestHeadings } from './CmRequestHeadings';
import { VStack } from '@chakra-ui/react';

export const CmRequest_listView = (props) => {
  const { cmRequest } = props;

  return (
    <VStack justify="start" alignItems="start" m="25px">
      <CmRequestHeadings />
      {cmRequest.map((model) => (
        <CmRequestRow model={model} />
      ))}
    </VStack>
  );
};
