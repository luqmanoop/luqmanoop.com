import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <main className="layout-default max-w-3xl">
      <Outlet />
    </main>
  );
}

export function meta() {
  return [{ title: "App" }];
}
