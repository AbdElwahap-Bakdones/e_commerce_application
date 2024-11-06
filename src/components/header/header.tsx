import {
  HoverCard,
  Group,
  Button,
  Text,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  Stack,
} from "@mantine/core";
import { SiCountingworkspro } from "react-icons/si";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../search/search";
import CartIcon from "../appBar/app_bar";
import AuthStore from "../../store/authStore";
import DarkMode from "../DarkMode";

export function HeaderMegaMenu({ auth = true }) {
  const { kind } = AuthStore();
  const navigate = useNavigate();
  const auth_store = AuthStore();
  const handleNavigateLogin = () => {
    navigate("login");
  };
  const handleNavigateSignUp = () => {
    navigate("signUp");
  };

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const theme = useMantineTheme();

  const handleLogout = () => {
    auth_store.set_logged(false);
  };
  return (
    <Box pb={"lg"}>
      <header className={classes.header}>
        <Group justify="space-between" gap={"0"}>
          <Group justify="start">
            <SiCountingworkspro color="#FDC128" />
            <Text style={{ color: "#FDC128" }}>{"E-Commerce"}</Text>
            <DarkMode />

            {auth && (
              <Box maw={"35%"}>
                <SearchBar />
              </Box>
            )}
          </Group>
          {auth && (
            <Group h="50%" gap={2} visibleFrom="md">
              <Anchor
                px={"lg"}
                style={{ color: "white" }}
                href="#"
                className={classes.link}
              >
                Home
              </Anchor>
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <Anchor
                    style={{ color: "white" }}
                    href="#"
                    className={classes.link}
                  >
                    <Center inline>
                      <Box style={{ color: "white" }} component="span" mr={5}>
                        Features
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </Anchor>
                </HoverCard.Target>

                <HoverCard.Dropdown></HoverCard.Dropdown>
              </HoverCard>
              <Anchor
                px={"lg"}
                style={{ color: "white" }}
                href="#"
                className={classes.link}
              >
                Learn
              </Anchor>
              <Anchor
                style={{ color: "white" }}
                href="#"
                className={classes.link}
              >
                Academy
              </Anchor>
            </Group>
          )}
          {auth && kind === "User" && (
            <Group h="100%" gap={0} visibleFrom="xs">
              <CartIcon />
            </Group>
          )}
          {auth && (
            <Button
              visibleFrom="sm"
              variant="outline"
              color="#FDC128"
              style={{ font: "status-bar" }}
              onClick={handleLogout}
              // hidden={{ base: true, sm: false }}
            >
              logout
            </Button>
          )}
          {!auth && (
            <Group visibleFrom="sm">
              <Button variant="outline" onClick={handleNavigateLogin}>
                Log in
              </Button>
              <Button variant="white" onClick={handleNavigateSignUp}>
                Sign up
              </Button>
            </Group>
          )}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="50%"
        // py="md"
        title="E-Commerce"
        hiddenFrom="lg"
        zIndex={1000000}
        bg={"#FDC128"}
      >
        <ScrollArea
          color="red"
          bg={"#FFEFE1"}
          h={`calc(100vh - ${rem(30)})`}
          p={"xl"}
        >
          <Stack>
            <CartIcon />
            <Divider size={"lg"} />
            <Button
              variant="outline"
              color="#FDC128"
              style={{ font: "status-bar" }}
              onClick={handleLogout}
              // hidden={{ base: true, sm: false }}
            >
              logout
            </Button>
            <Divider size={"lg"} />
          </Stack>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
