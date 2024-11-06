import { Box, Flex } from "@mantine/core";
import { HomePage } from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart";
import { useEffect } from "react";
import useCartStore from "./store/cartStore";
import { CartStorageType, get_cart_storage } from "./actions/ManageCart";
import { HeaderMegaMenu } from "./components/header/header";
import DashBoard from "./pages/signUp/DashBoard";
import ProtectedRouteUser, {
  ProtectedRouteManager,
} from "./auth/ProtectedRoute";

function App() {
  const setCart = useCartStore((state) => state.set_cart);

  useEffect(() => {
    const cart = get_cart_storage();
    if (cart) {
      try {
        const parsedCart: CartStorageType = cart;
        setCart(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart from local storage:", error);
      }
    }
  }, []);
  return (
    <Flex
      style={{ height: "100%", width: "100%" }}
      align="center"
      justify="center"
    >
      <Box
        pt={"sm"}
        // mb={"xl"}
        // mah={"5rem"}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 300,
          backgroundColor: "#0F0D35",
        }}
      >
        <HeaderMegaMenu />
      </Box>
      <Box
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#FFEFE",
        }}
        pt={"6.5rem"}
        // mt={"6rem"}
      >
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="cart/" element={<Cart />} />
          <Route
            path="Dashboard/"
            element={
              <ProtectedRouteManager>
                <DashBoard />
              </ProtectedRouteManager>
            }
          />
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;
