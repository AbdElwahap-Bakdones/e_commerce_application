import UserType from "../types/user";

export const is_logged: () => boolean = () => {
  return get_user_storage() ? true : false;
};
export const get_kind_user: () => "User" | "Admin" | "Guest" = () => {
  const user = get_user_storage();
  if (!user) return "Guest";
  return user.kind;
};
export const logout_storage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("cart");
};

export const get_user_storage: () => UserType | null = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const set_user_storage = (data: UserType) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      email: data.email,
      name: data.name,
      balance: data.balance,
      kind: data.kind,
    })
  );
};
