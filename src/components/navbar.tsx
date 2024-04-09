import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between items-center py-4 px-6 text-custom-gold bg-custom-dark">
        <div>
          <Link href="/" className="text-xl font-bold">
            J
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/projects/all" className="mr-4">
            Projects
          </Link>
          <a href="https://github.com/jamieskidmore" className="mr-4">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jamieskidmore/">LinkedIn</a>
        </div>
      </nav>
    </header>
  );
}
