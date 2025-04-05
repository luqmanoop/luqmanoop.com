import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "luqmanoop" },
    { name: "description", content: "luqmanoop's personal website" },
  ];
}

export default function Home() {
  return <div>Hello, World!</div>;
}
