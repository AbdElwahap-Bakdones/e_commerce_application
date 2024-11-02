import { Center, Grid } from "@mantine/core";
import { Cards } from "./cards";
import { HeaderMegaMenu } from "../components/header/header";
import AppBard from "../components/appBar/app_bar";
import useProducts from "../hooks/product/get_products";
import { productsContext } from "../context/products";
import { Loader } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { SignUp } from "./signUp/signUp";
import Cart from "./cart";

export function HomePage() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <Center style={{ height: "100vh", width: "100vw" }}>
        <Loader size={"xl"} />
      </Center>
    );
  }

  if (error) {
    return <div>Error: </div>;
  }
  return (
    <productsContext.Provider value={data}>
      <Grid justify="center" align="center" style={{ marginTop: "9rem" }}>
        <Grid.Col
          span={12}
          p={"sm"}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "InfoBackground",
          }}
        >
          <HeaderMegaMenu />
        </Grid.Col>
        <Grid.Col
          px={"xl"}
          span={12}
          style={{
            width: "100vw",
            position: "fixed",
            top: 50,
            zIndex: 10,
            backgroundColor: "lightgoldenrodyellow",
          }}
        >
          <AppBard />
        </Grid.Col>
        <Grid.Col span={11} pr={"lg"}>
          <Cards />
        </Grid.Col>
      </Grid>
    </productsContext.Provider>
  );
}
