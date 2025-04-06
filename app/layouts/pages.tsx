import { Outlet } from "react-router";

export default function PagesLayout() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="content">
        <Outlet />
      </div>
    </main>
  );
}
