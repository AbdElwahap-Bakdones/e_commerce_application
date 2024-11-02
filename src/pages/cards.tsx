import { Box, Grid } from "@mantine/core";
import ProductsList from "./products";

export function Cards() {
  return (
    <Grid>
      <Box>
        <ProductsList />
      </Box>
    </Grid>
  );
}
