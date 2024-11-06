import { Grid } from "@mantine/core";
import { Cards } from "./cards";

export function HomePage() {
  return (
    // <productsContext.Provider value={data}>
    <Grid justify="center" align="center" grow px={"lg"}>
      <Grid.Col span={12}></Grid.Col>

      <Grid.Col span={11} pr={"lg"}>
        <Cards />
      </Grid.Col>
    </Grid>
    // </productsContext.Provider>
  );
}
