"use client";

import { useState } from "react";

export default function KVRPGInfo() {
  const [expand, setExpand] = useState(false);
  return (
    <div className="border-2 space-y-2 px-4 my-2">
      <h1>Kettle Valley Regional Plumbing & Gas</h1>
      <h2>About</h2>
      <h2>Key Features</h2>
      <h2>Technologies used</h2>
      {expand && (
        <>
          <h2>Future plans</h2>
        </>
      )}

      <div className="grid grid-cols-3 gap-4 w-full">
        <a
          className="w-full flex justify-center"
          href="https://kvr.vercel.app/"
          target="_blank"
        >
          Visit the site
        </a>
        <a
          className="w-full flex justify-center"
          href="https://github.com/jamieskidmore/kvr"
          target="_blank"
        >
          Github
        </a>
        <div
          className="w-full flex justify-center"
          onClick={() => setExpand(!expand)}
        >
          {!expand ? <p>Read more</p> : <p>Minimize</p>}
        </div>
      </div>
    </div>
  );
}
