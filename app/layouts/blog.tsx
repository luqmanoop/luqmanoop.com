import { Outlet } from "react-router";

export default function BlogLayout() {
  return (
    <div className="prose dark:prose-invert prose-a:no-underline">
      <Outlet />
    </div>
  );
}

export function meta() {
  return [{ title: "Blog" }];
}
