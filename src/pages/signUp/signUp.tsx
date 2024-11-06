import {
  Paper,
  Text,
  TextInput,
  Button,
  Group,
  SimpleGrid,
  PasswordInput,
  Container,
} from "@mantine/core";
import classes from "./GetInTouch.module.css";
import { useState } from "react";
import useSignUp from "../../hooks/auth/useSignUp";
import UserType from "../../types/user";
import { set_user_storage } from "../../actions/ManageUser";

export function SignUp() {
  const { mutate } = useSignUp();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmedError, setConfirmedError] = useState("");

  const validateEmail = (email: string) => {
    setEmailError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) return true;
    setEmailError("Please enter a valid email address.");
    return false;
  };
  const validatePassword = (password: string) => {
    setPasswordError("");
    const minLength = 8;
    const maxLength = 20;
    if (password.length >= minLength && password.length <= maxLength)
      return true;
    setPasswordError(`Password must be between 8 and 20 characters.`);
  };
  const ValidConfirmed = (password: string, confirmPassword: string) => {
    setConfirmedError("");
    if (password === confirmPassword) return true;
    setConfirmedError("password not mach !");
    return false;
  };
  const handleSubmit = () => {
    if (
      !validateEmail(email) ||
      !validatePassword(password) ||
      !ValidConfirmed(password, confirmPassword)
    ) {
      return;
    }

    const formData: UserType = {
      name,
      email,
      password,
      balance: 0,
      kind: "User",
    };

    set_user_storage(formData);
    mutate(formData);
  };

  return (
    <Container size={"70%"} my={40}>
      <Text
        size="1.5rem"
        fw={800}
        className={classes.title}
        style={{ color: "gold" }}
        pb={"md"}
      >
        Create New Account
      </Text>

      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <form
            className={classes.form}
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput
                  label="Your name"
                  placeholder="Your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <TextInput
                  label="Your email"
                  placeholder="hello@mantine.dev"
                  required
                  value={email}
                  onBlur={() => {
                    validateEmail(email);
                  }}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  error={emailError} // Display email error message
                />
              </SimpleGrid>

              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                value={password}
                onBlur={() => {
                  validatePassword(password);
                }}
                onChange={(e) => setPassword(e.currentTarget.value)}
                error={passwordError} // Display password error message
              />
              <PasswordInput
                label="Confirm Password"
                placeholder="Repeat password"
                required
                mt="md"
                value={confirmPassword}
                onBlur={() => {
                  ValidConfirmed(password, confirmPassword);
                }}
                onChange={(e) => {
                  setConfirmPassword(e.currentTarget.value);
                }}
                error={confirmedError}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control}>
                  Register
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </Container>
  );
}
