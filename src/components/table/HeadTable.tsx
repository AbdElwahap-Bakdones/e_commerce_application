import { Checkbox, rem, Table } from "@mantine/core";
import React from "react";

interface HeadTableType {
  selection: string[];
  toggleAll: () => void;
  length: number;
}
function HeadTable({ selection, length, toggleAll }: HeadTableType) {
  return (
    <Table.Thead>
      <Table.Tr>
        <Table.Th style={{ width: rem(40) }}>
          <Checkbox
            onChange={toggleAll}
            checked={selection.length === length}
            indeterminate={selection.length > 0 && selection.length !== length}
          />
        </Table.Th>
        <Table.Th>ID</Table.Th>
        <Table.Th>Name</Table.Th>
        <Table.Th>Description</Table.Th>
        <Table.Th>Price</Table.Th>
        <Table.Th>Category</Table.Th>
        <Table.Th>Stock</Table.Th>
        <Table.Th>Features</Table.Th>
        <Table.Th>Ratings</Table.Th>
        <Table.Th>Image</Table.Th>
      </Table.Tr>
    </Table.Thead>
  );
}

export default HeadTable;
