import Typed from "typed.js";
import { useEffect } from "react";

import { Card } from "~/components";
import { useFetchApps } from "~/hooks/useFetchApps";

export function meta() {
  return [
    {
      title: "Apps — luqmanoop",
    },
  ];
}

export default function Apps() {
  const { data: apps } = useFetchApps();

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
        {apps?.map((app) => (
          <Card
            key={app.title}
            title={app.title}
            description={app.description}
            link={`/apps/${app.slug}`}
            size="large"
            tags={app.tags}
            image={app.icon}
          />
        ))}
      </div>
    </div>
  );
}
