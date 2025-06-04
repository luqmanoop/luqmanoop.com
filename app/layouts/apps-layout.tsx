import { Outlet } from "react-router";

export default function AppsLayout() {
	return (
		<main className="layout-default max-w-4xl">
			<Outlet />
		</main>
	);
}

export function meta() {
	return [{ title: "Apps" }];
}
