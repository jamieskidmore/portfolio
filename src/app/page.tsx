import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-lg">
      <h1>Jamie Skidmore</h1>
      <p>About me</p>
      <h2>Projects</h2>
      <ul>
        <li>
          <Link href="/projects/kvrpg">
            Kettle Valley Regional Plumbing & Gas
          </Link>
        </li>
        <li>
          <Link href="/projects/playlist">Playlist</Link>
        </li>
        <li>
          <Link href="/projects/whitestone">WhiteStone Care</Link>
        </li>
      </ul>
    </main>
  );
}
