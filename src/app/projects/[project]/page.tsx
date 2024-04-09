"use client";

import Info from "@/components/info";
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
        {/* {showKVRPGInfo && <KVRPGInfo {} />} */}
        {showPlaylistInfo && (
          <Info
            name="Playlist Converter"
            intro="This project is a free web application that converts playlists between popular music streaming platforms. The app connects popular third-party platforms such as Spotify or Apple Music and creates copies of playlists from the opposite platform on the linked account when provided with a unique public playlist URL."
            technology={[
              "Frontend: Next.js, React, Tailwind",
              "Backend: Neon database",
              "APIs: Spotify API, Apple Music API, emailjs",
              "Hosting: Vercel",
            ]}
            features={[
              {
                description: "Playlist conversion:",
                subFeatures: [
                  "Log in through Spotify or Apple Music account",
                  "Paste the link of a playlist to convert",
                  "Generate a link to the copied playlist on your streaming account",
                ],
              },
              {
                description:
                  "Emailing playlists: Send the link to your generated playlist to an unlimited number of friends by email",
              },
              {
                description:
                  "Playlist history: View a record of previously converted playlists and any unmatched songs",
              },
            ]}
            overview={[
              "I challenged myself to create this app to try something different and help manage my music collection as I use both Spotify and Apple Music.",
              "Music listeners who are switching from one platform to another can use this app to efficiently migrate their entire music library and all of their playlists. This app can also serve anyone wanting to share music with friends who use a different platform.",
              "Despite paying for access to the Apple Music API through an Apple Developer subscription, I decided to keep this application free to ensure that converting playlists remains accessible for all. I think that playlists can be an important tool for connection and creativity, and I want to help make sharing playlists easier",
            ]}
            motivation={{
              description:
                "In addition to wanting to solve an issue I was facing, I began developing this project with the following goals in mind:",
              reasons: [
                "Increasing my familiarity with creating applications that use the React library and Next.js framework",
                "Learning how to use APIs to extend the functionality of applications that I use regularly",
                "Challenging myself to combine separate APIs to create a unified, cohesive product",
              ],
            }}
            timeline={{
              description:
                "To develop this application, I followed this focused timeline:",
              entries: [
                "Week 1: Decided tech stack; read Spotify and Apple API documentation; created frontend boilerplate, hosted app on Vercel",
                "Week 2: Integrated conversion of playlists from Apple-Spotify",
                "Week 3: Integrated conversion of playlists from Spotify-Apple",
                "Week 4: Styled frontend; connected database; wrote database queries; integrated database queries into frontend",
              ],
            }}
            obstacles={[
              "While integrating Spotify and Apple Music into the playlist converter was successful, my original plan for the playlist converter involved a third streaming platform. I also use SoundCloud to stream music and hoped to implement the ability to transfer Spotify and Apple Music playlists to SoundCloud using the SoundCloud API. Unfortunately, public access to the API is indefinitely suspended but I have developed this platform with expansion in mind. I will return to this feature in the future with SoundCloud or another streaming service!",
              "During testing of playlist conversion from Spotify to Apple Music, I discovered that some songs from the Spotify playlists would not appear on the Apple Music versions. To maintain steady progress toward a functional app prototype, I decided to add a list of missed songs rather than trying to find matches for the songs. This decision ensured that users would not be confused on an inconsistency, and so that the unexpected bug did not delay progress on the application while still addressing the problem.",
            ]}
            reflections={[
              "So far, working on this project has increased my confidence in working with APIs and adapting to challenges in the development process. I feel a lot of satisfaction from having created a tool that I now use in my daily life!",
              "If I could start this project from scratch, I would have thought more about user authentication before beginning development, and gone with an authentication library such as NextAuth. Currently, the app authenticates Spotify and Apple Music accounts using each library’s custom authentication strategy. This approach works on a small scale, but would not be ideal when integrating additional streaming platforms into the application, because each platform needs its authentication. Libraries such as NextAuth streamline authentication resulting in a more scalable product.",
            ]}
            nextSteps={[
              "Right now, I’m working on improving the experience when a match for a song is not identified during playlist conversion. The goal is to show the closest match to the missing song and suggest adding it to the playlist. I want this suggestion to happen in real time while the playlist is being generated in order to preserve song order in the playlist",
              "Check back soon for updates!",
            ]}
            githubHref="https://github.com/jamieskidmore/playlist"
            siteHref="https://www.kvr.vercel.app"
          />
        )}
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
