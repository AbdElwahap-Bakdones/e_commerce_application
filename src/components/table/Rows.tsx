import { Avatar, Checkbox, Rating, Table } from "@mantine/core";
import ProductsType from "../../types/products";
import classes from "./TableSelection.module.css";
import cx from "clsx";

interface RowType {
  data: ProductsType;
  toggleRow: (id: string) => void;
  selection: string[];
}
function Rows({ data, toggleRow, selection }: RowType) {
  const selected = selection.includes(data.id);
  return (
    <Table.Tr key={data.id} className={cx({ [classes.rowSelected]: selected })}>
      <Table.Td>
        <Checkbox
          checked={selection.includes(data.id)}
          onChange={() => toggleRow(data.id)}
        />
      </Table.Td>
      <Table.Td>{data.id}</Table.Td>
      <Table.Td style={{ color: "#FCD128" }}>{data.name}</Table.Td>
      <Table.Td>{data.description}</Table.Td>
      <Table.Td style={{ color: "#FCD128" }}>
        {" "}
        {data.price.toFixed(2)}$
      </Table.Td>
      <Table.Td style={{ color: "#262c9c" }}>{data.category}</Table.Td>
      <Table.Td>{data.stock}</Table.Td>
      <Table.Td>{data.features.join(", ")}</Table.Td>
      <Table.Td>
        <Rating fractions={2} readOnly defaultValue={data.ratings.average} />
        {data.ratings.totalReviews}reviews
      </Table.Td>
      <Table.Td>
        <Avatar size={50} src={data.images} radius="md" />
      </Table.Td>
    </Table.Tr>
  );
}

export default Rows;
