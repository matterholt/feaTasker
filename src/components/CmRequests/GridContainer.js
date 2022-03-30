import { Grid } from "@chakra-ui/react";

export const GridContainer = (props) => {
const {children, uiqStyle} = props;
return (
<Grid templateColumns="120px 1fr 150px 100px 100px 75px" gap={1} w='100vw' bg={uiqStyle?.bg} color={uiqStyle?.color} py="5px">
      {children}
</Grid>
);
};