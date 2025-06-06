import Card from "~/components/card";

export function meta() {
  return [
    {
      title: "Home — luqmanoop",
    },
  ];
}

export default function HomePage() {
  return (
    <div className="flex flex-col pb-6">
      <div className="flex flex-col items-center text-center space-y-2">
        <img
          src="/assets/profile.jpeg"
          alt="Luqmanoop Avatar"
          className="w-36 h-36 object-cover border-6 border-gray-200 rounded-full"
        />
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-teal-500 to-orange-500 text-transparent bg-clip-text">
          Luqman Olushi{" "}
          <span title="Opemipo" className="hidden md:inline">
            O.
          </span>
        </h1>
        <p className="text-shadow text-gray-900 dark:text-gray-500">
          Software Engineer,{" "}
          <span className="underline decoration-wavy underline-offset-2" title="🤞🏼">
            <a
              href="https://youtube.com/@luqmanoop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Part-Time Creator
            </a>
          </span>
        </p>
      </div>

      <section className="mt-16">
        <h2 className="text-sm font-medium text-gray-400 uppercase mb-4">
          Creating
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="X Mass Unfollow"
            description="A chrome extension to mass unfollow users on X (formerly Twitter)."
            link="https://chromewebstore.google.com/detail/x-twitter-mass-unfollow/bidolfkgmbnlnijabkjafdajjpocfhol"
            badge={["chrome-extension"]}
          />

          <Card
            title="1loc-vscode"
            description="VSCode extension for common JavaScript utilities in one line of code!"
            link="https://marketplace.visualstudio.com/items?itemName=codeshifu.1loc"
            badge={["vscode-extension"]}
          />
          
          <Card
            title="Youtube"
            description="My YouTube channel where I upload devlogs and tutorial videos."
            link="https://www.youtube.com/@luqmanoop"
            badge={["youtube"]}
          />

          <Card
            title="GitHub"
            description="A repository of my projects and open-source contributions."
            link="https://github.com/luqmanoop"
            badge={["github"]}
          />
        </div>
      </section>
    </div>
  );
}
