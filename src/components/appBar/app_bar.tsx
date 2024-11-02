import { Anchor, Box, Group, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { SearchBar } from "../search/search";
import { BsCashCoin } from "react-icons/bs";
import useCartStore from "../../store/cartStore";
import { CustomDialog } from "../dialog/CustomDialog";
import { useNavigate } from "react-router-dom";

function AppBar() {
  const { carts } = useCartStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navigate = useNavigate();
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const handleNavigateCart = () => {
    navigate("/cart/"); // Navigate to the About page
  };
  //   const totalCount = 5;
  return (
    <Box>
      <CustomDialog open={isDialogOpen} onClose={closeDialog} />

      <Group justify="space-between" px={"lg"}>
        <SearchBar />
        <Anchor underline="never" onClick={handleNavigateCart}>
          <Group>
            {carts.totalCount > 0 && (
              <BsCashCoin size="2rem" style={{ color: "green" }} />
            )}
            <Stack gap={"0px"}>
              <Text size="1rem" fw={800} style={{ color: "green" }}>
                {carts.totalCount}
              </Text>
              <FaCartShopping style={{ color: "gold" }} size={"2rem"} />
            </Stack>
          </Group>
        </Anchor>
      </Group>
    </Box>
  );
}

export default AppBar;
