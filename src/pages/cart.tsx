import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Group,
  Text,
} from "@mantine/core";
import { SimpleProductCard } from "../components/card/simpleCard";
import useCartStore from "../store/cartStore";
import { BsCashCoin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const productInCart = useCartStore();
  const nav = useNavigate();
  const handlerClose = () => {
    nav("/home/");
  };
  return (
    <Box style={{ minHeight: "100vh" }} pb={"3rem"} pt={"md"}>
      <Grid justify="center" align="center">
        {productInCart.carts.carts?.map((product) => (
          <Grid.Col span={{ base: 12, md: 6, lg: 5 }} key={product.id}>
            <Center>
              <SimpleProductCard {...product} />
            </Center>
          </Grid.Col>
        ))}
      </Grid>
      <Box style={{ padding: "lg", marginTop: "auto" }}>
        <Container
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "lg",
          }}
        >
          <Group>
            <Button
              onClick={() => {
                // handleAddToCart(id, price, image);
              }}
              variant="white"
              radius="xl"
              style={{ flex: 1 }}
            >
              {" Pay ."}
              <BsCashCoin style={{ color: "goldenrod" }} size={"1.5rem"} />
            </Button>
            <Button
              bg={"blue"}
              onClick={handlerClose}
              variant="filled"
              radius="xl"
              style={{ flex: 1 }} // Allow buttons to grow equally
            >
              {" Close "}
            </Button>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}

export default Cart;
