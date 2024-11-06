export default interface UserType {
  name: string;
  email: string;
  password: string;
  balance: number;
  kind: "User" | "Admin" | "Guest";
}
