import { Grid } from "@mantine/core";
import { ProductCard } from "../components/card/cardProduct";
import CustomLoader from "../components/Loader";
import useProducts from "../hooks/product/useGetProducts";
import useSearch from "../store/useSearch";

export default function ProductsList() {
  const { data, isLoading, error } = useProducts();
  const { search_key } = useSearch();

  if (!data || isLoading || error) return <CustomLoader />;
  return (
    <Grid>
      {data
        .filter((product) =>
          product.name.toLowerCase().includes(search_key.toLowerCase())
        )
        .map((product) => (
          <Grid.Col
            key={product.id}
            miw={"20rem"}
            span={{ xl: "auto", lg: 4, md: 6, sm: 12, base: 12 }}
          >
            <ProductCard {...product} />
          </Grid.Col>
        ))}
    </Grid>
  );
}
