"use client";

import KVRPGInfo from "@/components/kvrpg-info";
import PlaylistInfo from "@/components/playlist-info";
import WhiteStoneInfo from "@/components/whitestone-info";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  { id: 1, name: "Kettle Valley Regional Plumbing & Gas", url: "kvrpg" },
  { id: 2, name: "Playlist Converter", url: "playlist" },
  { id: 3, name: "WhiteStone Dental Care", url: "whitestone" },
];

export default function Project({ params }: { params: { project: string } }) {
  const [showKVRPGInfo, setShowKVRPGInfo] = useState(false);
  const [showPlaylistInfo, setShowPlaylistInfo] = useState(false);
  const [showWhiteStoneInfo, setShowWhiteStoneInfo] = useState(false);

  const resetState = () => {
    setShowKVRPGInfo(false);
    setShowPlaylistInfo(false);
    setShowWhiteStoneInfo(false);
  };

  const showProject = (project: string) => {
    resetState();
    if (project === "kvrpg") {
      setShowKVRPGInfo(true);
    } else if (project === "playlist") {
      setShowPlaylistInfo(true);
    } else if (project === "whitestone") {
      setShowWhiteStoneInfo(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    showProject(params.project);
  }, [params]);

  return (
    <div className="mx-auto max-w-2xl flex flex-col items-center text-custom-gold">
      <div className="min-h-32 w-full flex flex-col items-left justify-center">
        {showKVRPGInfo && <KVRPGInfo />}
        {showPlaylistInfo && <PlaylistInfo />}
        {showWhiteStoneInfo && <WhiteStoneInfo />}
        {!showKVRPGInfo && !showPlaylistInfo && !showWhiteStoneInfo && (
          <div className="flex w-full h-full justify-center items-center">
            <p>Select a project!</p>
          </div>
        )}
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.url}`}>
            <div className="bg-gray-800 rounded w-full p-4">
              <Image
                src="/placeholder.png"
                alt="placeholder"
                width="600"
                height="600"
              ></Image>
              <p>{project.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
