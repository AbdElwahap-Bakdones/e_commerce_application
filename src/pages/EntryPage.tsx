import { Box, Stack } from "@mantine/core";
import React from "react";
import { HeaderMegaMenu } from "../components/header/header";
import { Login } from "./login/login";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./signUp/signUp";
import DashBoard from "./signUp/DashBoard";

function EntryPage() {
  return (
    <Stack w={"100vw"}>
      <Box
        p={"sm"}
        mb={"xl"}
        style={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "#0F0D35",
        }}
      >
        <HeaderMegaMenu auth={false} />
        <Routes>
          <Route path="/login/*" element={<Login />} />
          <Route path="/signUp/*" element={<SignUp />} />
        </Routes>
      </Box>
      {/* <DashBoard /> */}
    </Stack>
  );
}

export default EntryPage;
