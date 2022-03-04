
import { Grid, Box, Text, GridItem ,SimpleGrid} from '@chakra-ui/react';

export const CmRequestRow = (props) => {
  const { model } = props;
  const { id, modelName, description, modelBase, status, priority } = model;

  return (
    <SimpleGrid bg="blue.100" height="80px" columns={6} spacing={1}>
      <GridItem>
        <Text bg="blue.200">{modelName}</Text>
      </GridItem>
      <GridItem>
        <Text fontSize="xs" w="150px" bg="red.100">
          {description}
        </Text>
      </GridItem>

      <p>{modelBase}</p>

      <p>{priority}</p>
      <Box w="50px" bg="gray.500">
        :::
      </Box>
    </SimpleGrid>
  );
};