import { Autocomplete } from "@mantine/core";
import { useProductsContext } from "../../context/products";

export function SearchBar() {
  const products = useProductsContext();
  const name = products.map((prod) => {
    return prod.name;
  });

  return (
    <Autocomplete
      data={name}
      //   renderOption={renderAutocompleteOption}
      maxDropdownHeight={300}
      label="Products"
      placeholder="Search for products"
    />
  );
}
