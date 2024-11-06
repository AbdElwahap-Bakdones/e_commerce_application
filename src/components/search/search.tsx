import { Autocomplete } from "@mantine/core";
import useProductsStore from "../../store/useProductsStore";
import CustomLoader from "../Loader";
import useSearch from "../../store/useSearch";
import { SetStateAction, useState } from "react";

export function SearchBar() {
  const { Products } = useProductsStore();
  const { set_search_key, search_key } = useSearch();
  const [searchValue, setSearchValue] = useState("");
  if (!Products) return <CustomLoader />;

  console.log(Products);

  if (!Products) return <CustomLoader />;

  const name = Products.map((prod) => prod.name);

  const handleSearch = (value: any) => {
    setSearchValue(value);
    set_search_key(value);
  };
  return (
    <Autocomplete
      style={{
        zIndex: 1000,
      }}
      data={name}
      value={searchValue}
      onChange={handleSearch}
      maxDropdownHeight={300}
      placeholder={"Search for products"}
    />
  );
}
