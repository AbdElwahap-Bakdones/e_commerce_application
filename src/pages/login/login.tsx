import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./AuthenticationTitle.module.css";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("home/"); // Navigate to the About page
  };
  const handleNavigateSignUp = () => {
    navigate("sign_up/"); // Navigate to the About page
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title} style={{ color: "gold" }}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button" onClick={handleNavigateSignUp}>
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={handleNavigateHome}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
