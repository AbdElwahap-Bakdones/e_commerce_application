import {
  Card,
  Image,
  Text,
  Group,
  Button,
  Container,
  Anchor,
  Box,
} from "@mantine/core";
import {} from "@tabler/icons-react";
import classes from "./FeaturesCard.module.css";
import { CartType } from "../../types/products";
import useCartStore from "../../store/cartStore";
import {
  addProductsToCart,
  deleteProductsFromCart,
} from "../../actions/ManageCart";
import { IoAddCircle } from "react-icons/io5";

// import StorageCart from "../../actions/addProductsToCart";
import { IoMdRemoveCircle } from "react-icons/io";

export function SimpleProductCard(Props: CartType) {
  const addToCart = useCartStore((state) => state.add_cart);
  const deleteToCart = useCartStore((state) => state.delete_cart);

  const handleAddToCart = (id: string, price: number, image: string) => {
    addToCart(id, price, image);
    addProductsToCart(id, price, image);
  };
  const handleDeleteToCart = (id: string) => {
    deleteToCart(id);
    deleteProductsFromCart(id);
  };
  const { image, id, price, count } = Props;
  const getProductPrice = () => {
    const totalPrice = price * count;
    return totalPrice.toFixed(2);
  };
  return (
    <Card
      withBorder
      radius="md"
      m={0}
      className={classes.card}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Card.Section className={classes.imageSection}>
        <Image
          fit="contain"
          src={image}
          alt={"name"}
          style={{
            maxWidth: "100%",
            height: "20rem",
            display: "inline-block",
          }}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <Group gap={30} justify="space-around">
          <div style={{ width: "100px" }}>
            <Text
              fz="xl"
              fw={700}
              style={{
                lineHeight: 1,
                color: "black",
                width: "100%",
                textOverflow: "ellipsis",
              }}
            >
              {getProductPrice()}$
            </Text>
          </div>

          <Group>
            <Anchor
              onClick={() => {
                handleDeleteToCart(id);
              }}
            >
              <IoMdRemoveCircle style={{ color: "#262c9c" }} size={"2.5rem"} />
            </Anchor>
            <div>
              <Text
                fz="xl"
                fw={700}
                style={{
                  lineHeight: 1,
                  color: "white",
                  borderRadius: "0.5rem",
                }}
                bg={"#228BE6"}
                p="xs"
              >
                {count}
              </Text>
            </div>
            <Anchor
              onClick={() => {
                handleAddToCart(id, price, image);
              }}
            >
              <IoAddCircle style={{ color: "#262c9c" }} size={"2.5rem"} />
            </Anchor>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
