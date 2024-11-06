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
  Center,
} from "@mantine/core";
import classes from "./AuthenticationTitle.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/auth/uselogin";
import AuthStore from "../../store/authStore";
import { set_user_storage } from "../../actions/ManageUser";

export function Login() {
  const auth = AuthStore();
  const navigate = useNavigate();
  const [email_password, setEmail_password] = useState({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [needRefresh, setNeedRefresh] = useState(false);
  const { data, isFetched } = useLogin(
    email_password.email,
    email_password.password
  );

  const handleNavigateHome = () => {
    auth.set_logged(true);
    auth.set_kind(data?.kind || "Guest");

    set_user_storage(data!);
    navigate("/");
  };

  const handleNavigateSignUp = () => {
    navigate("sign_up/");
  };

  const handleSignIn = () => {
    // auth.set_logged(true);
    setError(false);
    if (email === "" || password === "") {
      setError(true);
    } else {
      setEmail_password({ email, password });

      setNeedRefresh(true);
    }
  };
  if (needRefresh && isFetched) {
    setNeedRefresh(false);

    if (data !== undefined && data.email !== "" && data?.password !== "") {
      handleNavigateHome();
    }
    setLoginFailed(true);
  }

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
        <Center>
          {loginFailed && (
            <Text style={{ color: "red" }}>
              Login failed. Please check your username or password.
            </Text>
          )}
        </Center>
        <TextInput
          label="Email"
          placeholder="abd@bakdones.dev"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)} // Update state on change
          error={error && email === "" ? "Email is require" : ""}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)} // Update state on change
          error={error && password === "" ? "Password is require" : ""}
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={handleSignIn}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
