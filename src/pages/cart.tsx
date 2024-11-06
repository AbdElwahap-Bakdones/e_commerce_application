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
import { MdOutlinePayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const productInCart = useCartStore();
  const nav = useNavigate();
  const handlerClose = () => {
    nav("/home/");
  };
  return (
    <Box style={{ minHeight: "100%" }} px={"xs"} mb={"5rem"} pt={"md"}>
      <Grid justify="center" align="center">
        {productInCart.carts.carts?.map((product) => (
          <Grid.Col
            span={{ xl: "auto", lg: 4, md: 6, sm: 12, base: 12 }}
            key={product.id}
          >
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
          <Group mb={"lg"}>
            <Button
              onClick={() => {
                // handleAddToCart(id, price, image);
              }}
              variant="filled"
              radius="xl"
              style={{ flex: 1, borderColor: "#fcd128", fontStyle: "unset" }}
              color="#ffff"
            >
              <MdOutlinePayment style={{ color: "#fcd128" }} size={"1.5rem"} />
              <Text c={"blue"} size="1.5rem">
                Pay : {productInCart.carts.totalPrice.toFixed(2)}$
              </Text>
            </Button>
            <Button
              bg={"blue"}
              onClick={handlerClose}
              variant="filled"
              radius="xl"
              style={{ flex: 1 }} // Allow buttons to grow equally
            >
              <Text size="1.5rem">Close</Text>{" "}
            </Button>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}

export default Cart;
