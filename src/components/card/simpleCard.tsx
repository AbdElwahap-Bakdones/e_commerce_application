import {
  Card,
  Image,
  Text,
  Group,
  Button,
  Container,
  Anchor,
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
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image fit="fill" src={image} alt={"name"} />
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30} justify="space-between">
          <div style={{ width: "100px" }}>
            <Text
              fz="xl"
              fw={700}
              style={{
                lineHeight: 1,
                color: "goldenrod",
                width: "100%",
                textOverflow: "ellipsis",
              }}
            >
              ${price * count}
            </Text>
          </div>

          <Group>
            <Anchor
              onClick={() => {
                handleDeleteToCart(id);
              }}
            >
              <IoMdRemoveCircle style={{ color: "red" }} size={"2rem"} />
            </Anchor>
            <Anchor
              onClick={() => {
                handleAddToCart(id, price, image);
              }}
            >
              <IoAddCircle style={{ color: "green" }} size={"2rem"} />
            </Anchor>
          </Group>
          <div>
            <Text
              fz="xl"
              fw={700}
              style={{
                lineHeight: 1,
                color: "white",
                borderRadius: "4rem",
              }}
              bg={"goldenrod"}
              p="xs"
            >
              {count}
            </Text>
          </div>
        </Group>
      </Card.Section>
    </Card>
  );
}
