import { Grid } from "@chakra-ui/react";

export const GridContainer = (props) => {
const {children, uiqStyle} = props;
return (
<Grid templateColumns="repeat(6, 1fr)" gap={1} w='100vw' bg={uiqStyle?.bg} color={uiqStyle?.color} py="5px">
      {children}
</Grid>
);
};