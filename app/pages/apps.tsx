import Typed from "typed.js";
import { useEffect } from "react";
import { useLoaderData } from "react-router";

import { Card } from "~/components";
import { getApps } from "~/utils/apps";

export function meta() {
  return [
    {
      title: "Apps — luqmanoop",
    },
  ];
}

export async function loader() {
  return {
    apps: await getApps(),
  };
}

export default function Apps() {
  const { apps } = useLoaderData<typeof loader>();
  useEffect(() => {
    const typed = new Typed("#typed", {
      strings: ["web", "desktop", "mobile"],
      typeSpeed: 80,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    });

    typed.start();

    return () => typed.destroy();
  }, []);

  return (
    <div>
      <h1 className="text-4xl md:text-6xl pt-6 pb-14 font-bold text-center text-shadow text-shadow-red-500">
        Quality{" "}
        <span
          id="typed"
          className="bg-gradient-to-r from-teal-500 to-orange-500 text-transparent bg-clip-text"
        />{" "}
        apps
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 md:py-12 gap-8 md:gap-12">
        {apps.map((app) => (
          <Card
            key={app.title}
            title={app.title}
            description={app.description}
            link="#"
            size="large"
            tags={app.tags}
            image={app.icon}
          />
        ))}
      </div>
    </div>
  );
}
