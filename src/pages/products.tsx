import { Grid } from "@mantine/core";
import { useProductsContext } from "../context/products";
import { ProductCard } from "../components/card/cardProduct";

export default function ProductsList() {
  const products = useProductsContext();
  return (
    <Grid>
      {products?.map((product) => (
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <ProductCard {...product} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
