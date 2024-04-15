import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full">
      <nav className="flex justify-between items-center py-4 px-6 text-green-700 bg-gray-800">
        <div>
          <Link href="/" className="text-3xl font-bold">
            J
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/projects/all" className="mr-4">
            Projects
          </Link>
          <a
            href="https://github.com/jamieskidmore"
            className="mr-4"
            target="_blank"
          >
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jamieskidmore/" target="_blank">
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}
