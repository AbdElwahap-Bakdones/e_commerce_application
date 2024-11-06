import { Center, Loader } from "@mantine/core";
import React from "react";

export default function CustomLoader() {
  return (
    <Center style={{ height: "100%", width: "100%" }}>
      <Loader size={"xl"} />
    </Center>
  );
}
