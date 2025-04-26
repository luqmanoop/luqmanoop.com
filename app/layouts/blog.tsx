import { Outlet } from "react-router";

export default function BlogLayout() {
	return (
		<div className="layout-default prose dark:prose-invert prose-a:no-underline prose-a:hover:underline prose-a:hover:decoration-3 prose-a:hover:underline-offset-[6px]">
			<Outlet />
		</div>
	);
}

export function meta() {
	return [{ title: "Blog" }];
}
