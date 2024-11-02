import { Box, Flex } from "@mantine/core";
import { HomePage } from "./pages/home";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { SignUp } from "./pages/signUp/signUp";
import Cart from "./pages/cart";
import { useEffect } from "react";
import useCartStore from "./store/cartStore";
import { CartStorageType } from "./actions/ManageCart";

function App() {
  const setCart = useCartStore((state) => state.set_cart);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      try {
        const parsedCart: CartStorageType = JSON.parse(cart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart from local storage:", error);
      }
    }
  }, []);
  return (
    <Flex
      style={{ height: "100vh", width: "100vw" }}
      align="center"
      justify="center"
    >
      <Box
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "lightgoldenrodyellow",
        }}
      >
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="sign_up/*" element={<SignUp />} />

          <Route path="home/*" element={<HomePage />} />
          <Route path="cart/" element={<Cart />} />
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;
