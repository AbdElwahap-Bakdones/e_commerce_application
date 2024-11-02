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

export function SignUp() {
  return (
    <Container size={"70%"} my={40}>
      <Text
        // fz="xl"
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
            onSubmit={(event) => event.preventDefault()}
          >
            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput
                  label="Your email"
                  placeholder="hello@mantine.dev"
                  required
                />
              </SimpleGrid>

              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
              />
              <PasswordInput
                label="Confirm Password"
                placeholder="Repeat password"
                required
                mt="md"
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
