
import { Grid, Box, Button, Heading, GridItem } from '@chakra-ui/react';
import {GridContainer} from './'
const TextHeading = (props) => {
  const { title, children } = props;
  return (
    <GridItem>
      <Heading as="h2" size="sm">
        {title}
        {children}
      </Heading>
    </GridItem>
  );
};

export const CmRequestHeadings = (props) => {
  const {} = props;
  return (
    <GridContainer uiqStyle={{bg:"blue.900",color:'white'}}>
      <TextHeading title="Model Name" />
      <TextHeading title="Description" />
      <TextHeading title="Base Model" />
      <TextHeading title="Status" />
      <TextHeading title="Details" />
      <TextHeading title="other" />
      
    </GridContainer>
  );
};