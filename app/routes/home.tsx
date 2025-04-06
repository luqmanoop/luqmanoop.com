import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Mail, Menu } from "lucide-react";
import { useState } from "react";
import CreatingCard from "~/components/creating-card";

export function meta() {
  return [
    {
      title: "luqmanoop - Home",
    },
  ];
}

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen pb-6">
      <main className="max-w-3xl mx-auto px-6 py-6 sm:py-12 text-gray-800 font-sans">
        <nav className="mb-12">
          <div className="flex items-center justify-between sm:justify-center">
            <div className="sm:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-600"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden sm:flex space-x-6 font-medium text-gray-600">
              <a href="/" className="hover:text-black hover:underline">
                Home
              </a>
              <a href="/apps" className="hover:text-black hover:underline">
                Apps
              </a>
              <a href="/blog" className="hover:text-black hover:underline">
                Blog
              </a>
              <a href="/uses" className="hover:text-black hover:underline">
                Uses
              </a>
              <a href="/about" className="hover:text-black hover:underline">
                About
              </a>
              <a href="/contact" className="hover:text-black hover:underline">
                Contact
              </a>
            </div>
          </div>
          {menuOpen && (
            <div className="mt-4 flex flex-col space-y-2 font-medium text-gray-600 sm:hidden">
              <a href="/" className="hover:text-black hover:underline">
                Home
              </a>
              <a href="/apps" className="hover:text-black hover:underline">
                Apps
              </a>
              <a href="/blog" className="hover:text-black hover:underline">
                Blog
              </a>
              <a href="/uses" className="hover:text-black hover:underline">
                Uses
              </a>
              <a href="/about" className="hover:text-black hover:underline">
                About
              </a>
              <a href="/contact" className="hover:text-black hover:underline">
                Contact
              </a>
            </div>
          )}
        </nav>

        <div className="flex flex-col items-center text-center space-y-2">
          <img
            src="/assets/profile.jpeg"
            alt="Luqmanoop Avatar"
            className="w-32 h-32 object-cover border-6 border-gray-200"
          />
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-teal-500 to-orange-500 text-transparent bg-clip-text">
            Luqman<span title="Olushi Opemipo"> Olushi</span>
          </h1>
          <p className="text-shadow">
            Software Engineer,{" "}
            <span className="underline decoration-wavy" title="🤞🏼">
              Part-Time Creator
            </span>
          </p>
        </div>

        <section className="mt-16">
          <h2 className="text-sm font-medium text-gray-400 uppercase mb-4">
            Creating
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CreatingCard
              title="Youtube"
              description="My YouTube channel where I upload devlogs and tutorial videos."
              link="https://www.youtube.com/@luqmanoop"
              badge={["youtube"]}
            />

            <CreatingCard
              title="X Mass Unfollow"
              description="A chrome extension to mass unfollow users on X ( formerly Twitter)."
              link="https://chromewebstore.google.com/detail/x-twitter-mass-unfollow/bidolfkgmbnlnijabkjafdajjpocfhol"
              badge={["chrome-extension"]}
            />

            <CreatingCard
              title="GitHub"
              description="A repository of my projects and open-source contributions."
              link="https://github.com/luqmanoop"
              badge={["github"]}
            />

            <CreatingCard
              title="React Thanos"
              description="React hooks implementation of Google's Thanos easter egg."
              link="https://react-thanos.netlify.app/"
              badge={["react"]}
            />
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-sm font-medium text-gray-400 uppercase mb-4">
            Newsletter
          </h2>
          <p className="text-gray-600 mb-4">
            This is still in development. Check back later.
          </p>
          <div className="flex flex-col sm:flex-row w-auto items-center justify-center gap-2">
            <Input
              placeholder="Enter your email address"
              className="w-full sm:w-auto"
              disabled
            />
            <Button>
              Subscribe <Mail className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-500 text-sm">
        <p>© {currentYear} Luqmanoop. All rights reserved.</p>
      </footer>
    </div>
  );
}
