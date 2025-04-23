import { Outlet } from "react-router";

export default function PagesLayout() {
  return (
    <main className="layout-default max-w-4xl">
      <Outlet />
    </main>
  );
}
