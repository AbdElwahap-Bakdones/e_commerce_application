import { useState } from "react";
import { Table, ScrollArea, Button, Group } from "@mantine/core";
import Rows from "./Rows";
import HeadTable from "./HeadTable";
import useProducts from "../../hooks/product/useGetProducts";
import CustomLoader from "../Loader";
import AddRow from "./AddRow";
import useSearch from "../../store/useSearch";

export default function TableProducts() {
  const [ShowAddRow, setShowAddRow] = useState(false);
  const { data, isLoading, error } = useProducts();
  const { search_key } = useSearch();

  const [selection, setSelection] = useState([""]);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

  if (!data || error || isLoading) {
    return <CustomLoader />;
  }

  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.id)
    );
  const handleCloseAddRow = () => {
    setShowAddRow(true);
  };
  return (
    <ScrollArea w={"100%"} px={"xl"} pb={"md"}>
      <Group pb={"xs"} w={"100%"} justify="end">
        <Button variant="outline" onClick={handleCloseAddRow}>
          Add Product
        </Button>
      </Group>
      <Table
        striped
        miw={800}
        verticalSpacing="md"
        horizontalSpacing={"lg"}
        withTableBorder
        withColumnBorders
      >
        <HeadTable
          length={data.length}
          selection={selection}
          toggleAll={toggleAll}
        />
        <Table.Tbody>
          {/* <Table.Tr key={"addIcon"}><Table.Tr /> */}
          {ShowAddRow && <AddRow />}
          {data
            .filter((product) =>
              product.name.toLowerCase().includes(search_key.toLowerCase())
            )
            .map((product) => (
              <Rows
                data={product}
                selection={selection}
                toggleRow={toggleRow}
                key={"row"}
              />
            ))}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
