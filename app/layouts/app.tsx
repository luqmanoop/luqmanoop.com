import { Outlet } from "react-router";

export default function AppLayout() {
	return (
		<main className="layout-default max-w-[50rem]">
			<Outlet />
		</main>
	);
}
