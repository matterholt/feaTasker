import { CmRequestRow } from './CmRequestRow';
import { CmRequestHeadings } from './CmRequestHeadings';
import { VStack } from '@chakra-ui/react';

export const CmRequest_listView = (props) => {
  const { cmRequest } = props;

  return (
    <VStack>
      <CmRequestHeadings />
      {cmRequest.map((model) => (
        <CmRequestRow model={model} />
      ))}
    </VStack>
  );
};
