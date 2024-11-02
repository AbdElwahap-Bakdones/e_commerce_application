import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Stack,
  Center,
} from "@mantine/core";
import {} from "@tabler/icons-react";
import classes from "./FeaturesCard.module.css";
import ProductsType from "../../types/products";
import { MdStarRate } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlineWarehouse } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import useCartStore from "../../store/cartStore";
import {
  addProductsToCart,
  deleteProductsFromCart,
} from "../../actions/ManageCart";
// import StorageCart from "../../actions/addProductsToCart";

export function ProductCard(Props: ProductsType) {
  const addToCart = useCartStore((state) => state.add_cart);

  const handleAddToCart = (id: string, price: number, image: string) => {
    addToCart(id, price, image);
    addProductsToCart(id, price, image);
    // deleteProductsFromCart(id);
  };
  const { images, name, description, category, id, price, ratings, stock } =
    Props;
  return (
    <Center>
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={images} alt={name} />
        </Card.Section>
        <Stack>
          <Group justify="space-between" wrap="nowrap">
            <Text size="1.5rem" fw={700} style={{ color: "goldenrod" }}>
              {name}
            </Text>
            <Badge
              color={
                ratings.average > 4.5
                  ? "yellow"
                  : ratings.average > 4
                  ? "green"
                  : "blue"
              }
            >
              {ratings.average} <MdStarRate />
            </Badge>
          </Group>
          <Text fz="xs" c="dimmed">
            {description}
          </Text>
        </Stack>
        <Card.Section className={classes.section} mt="md">
          <Group justify="space-between" wrap="nowrap">
            <Text fz="sm" c="dimmed" className={classes.label}>
              {category}
            </Text>
            <Group justify="end" wrap="nowrap">
              <Badge variant="outline">
                {ratings.totalReviews} {" Total Reviews "} <MdOutlineReviews />
              </Badge>
              <Badge variant="outline">
                {stock}
                {" in stock "}
                <MdOutlineWarehouse />
              </Badge>
            </Group>
          </Group>
        </Card.Section>
        <Card.Section className={classes.section}>
          <Group gap={30} justify="space-between">
            <div>
              <Text
                fz="xl"
                fw={700}
                style={{ lineHeight: 1, color: "goldenrod" }}
              >
                ${price}
              </Text>
            </div>
            <Button
              onClick={() => {
                handleAddToCart(id, price, images);
              }}
              variant="outline"
              radius="xl"
              style={{ flex: 0.5 }}
            >
              {" Add to Cart "}
              <FaCartPlus style={{ color: "goldenrod" }} size={"1.5rem"} />
            </Button>
          </Group>
        </Card.Section>
      </Card>
    </Center>
  );
}
