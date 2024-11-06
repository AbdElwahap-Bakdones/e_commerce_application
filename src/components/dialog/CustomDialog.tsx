import {
  Box,
  Button,
  Center,
  Dialog,
  Grid,
  Group,
  Text,
  ScrollArea,
} from "@mantine/core";
import { SimpleProductCard } from "../card/simpleCard";
import useProducts from "../../hooks/product/useGetProducts";
import useCartStore from "../../store/cartStore";

interface CustomDialogProps {
  open: boolean;
  onClose: () => void; // Function to handle closing the dialog
}

export function CustomDialog({ open, onClose }: CustomDialogProps) {
  const productInCart = useCartStore();

  return (
    <Dialog
      size="lg" // Use predefined sizes like "xs", "sm", "md", "lg", "xl"
      onClose={onClose}
      opened={open}
      position={{ left: "15%", bottom: "5%" }}
      mt={"50rem"}
      w={"70vw"}
    >
      <ScrollArea style={{ height: "35rem", width: "100%" }}>
        <Grid justify="center" align="center">
          {productInCart.carts.carts?.map((product) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 5 }} key={product.id}>
              <Center>
                <SimpleProductCard {...product} />
              </Center>
            </Grid.Col>
          ))}
        </Grid>
      </ScrollArea>
      <Box style={{ padding: "lg", marginTop: "auto" }}>
        <Group>
          <Button
            onClick={() => {}}
            variant="outline"
            radius="xl"
            style={{ flex: 1 }} // Allow buttons to grow equally
          >
            <Text style={{ color: "gold" }} size="xl">
              Pay
            </Text>
          </Button>
          <Button
            bg={"blue"}
            onClick={onClose}
            variant="filled"
            radius="xl"
            style={{ flex: 1 }} // Allow buttons to grow equally
          >
            {" Close "}
          </Button>
        </Group>
      </Box>
    </Dialog>
  );
}
