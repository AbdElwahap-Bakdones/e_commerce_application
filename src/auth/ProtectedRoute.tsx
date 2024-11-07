import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthStore from "../store/authStore";
import DashBoard from "../pages/DashBoard";
import { HomePage } from "../pages/home";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRouteUser({ children }: ProtectedRouteProps) {
  const logged = AuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged.logged || logged.kind === "Guest") {
      navigate("/Entry", { replace: true });
      return;
    }
    if (logged.kind === "Admin") navigate("/Dashboard", { replace: true });
  }, [logged, logged.kind, logged.logged, navigate]);
  return <div>{children}</div>;
}

export function ProtectedRouteManager({ children }: ProtectedRouteProps) {
  const logged = AuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged.logged || logged.kind !== "Admin") {
      navigate("/Home", { replace: true });
    }
  }, [logged.kind, logged.logged, navigate]);

  return <div>{children}</div>;
}

export function GuestRoute({ children }: ProtectedRouteProps) {
  const logged = AuthStore();
  const navigate = useNavigate();
  if (logged.logged) navigate("/Home", { replace: true });
  return <div>{children}</div>;
}
