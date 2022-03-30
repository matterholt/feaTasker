
import { Grid, Box, Text, GridItem ,SimpleGrid} from '@chakra-ui/react';
import {GridContainer} from './'
export const CmRequestRow = (props) => {
  const { model } = props;
  const { id, modelName, description, modelBase, status, priority } = model;

  return (
    <GridContainer>
      <GridItem>
        <Text bg="blue.200">{modelName}</Text>
      </GridItem>

      <GridItem>
        <Text fontSize="xs" bg="red.100">
          {description}
        </Text>
      </GridItem>

      <GridItem>
      <p>{modelBase}</p>
      </GridItem>

      <GridItem>
      <p>{priority}</p>
      </GridItem>

      <GridItem>
      <p>{status}</p>
      </GridItem>

      <GridItem>
      <Box  bg="gray.500" color="white" p="2" fontSize="xs">
        details
      </Box>

      </GridItem>

    </GridContainer>
  );
};