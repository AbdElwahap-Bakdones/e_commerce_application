import { Anchor, Box, Group, Stack, Text } from "@mantine/core";
import { FaCartShopping } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import useCartStore from "../../store/cartStore";
import { useNavigate } from "react-router-dom";

function CartIcon() {
  const { carts } = useCartStore();

  const navigate = useNavigate();

  const handleNavigateCart = () => {
    navigate("/cart/"); // Navigate to the About page
  };
  //   const totalCount = 5;
  return (
    <Box>
      {/* <Group justify="end" px={"lg"} pt={"md"}> */}
      <Anchor underline="never" onClick={handleNavigateCart}>
        <Group>
          {carts.totalCount > 0 && (
            <BsCashCoin size="2rem" style={{ color: "#262c9c" }} />
          )}
          <Stack gap={"0px"}>
            <Text size="1rem" fw={800} style={{ color: "#FCD128" }}>
              {carts.totalCount}
            </Text>
            <FaCartShopping style={{ color: "#262c9c" }} size={"2rem"} />
          </Stack>
        </Group>
      </Anchor>
      {/* </Group> */}
    </Box>
  );
}

export default CartIcon;
