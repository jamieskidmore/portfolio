"use client";

import Info from "@/components/info";
import Image from "next/image";
import { useEffect, useState } from "react";

import { projectData } from "../../../../data";
import Link from "next/link";

export default function Project({ params }: { params: { project: any } }) {
  const [info, setInfo] = useState<any>({});

  useEffect(() => {
    if (params.project === "all") {
      setInfo({});
    } else {
      setInfo(projectData[params.project]);
    }
  }, []);

  return (
    <div className="mt-20 w-full flex flex-col items-center text-gray-300 space-y-12 mb-12">
      <div className="min-h-32 w-full flex flex-col items-left justify-center">
        {info.name ? (
          <Info
            name={info.name}
            intro={info.intro}
            technology={info.technology}
            features={info.features}
            overview={info.overview}
            motivation={info.motivation}
            timeline={info.timeline}
            obstacles={info.obstacles}
            reflections={info.reflections}
            nextSteps={info.nextSteps}
            githubHref={info.githubHref}
            siteHref={info.siteHref}
          />
        ) : (
          <div className="flex w-full h-full justify-center items-center text-6xl">
            <p>Select a project!</p>
          </div>
        )}
      </div>
      {info.name && (
        <div className="flex w-full h-fullitems-center text-6xl">
          <p>Projects</p>
        </div>
      )}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectData.map((project, index) => (
          <Link key={index} href={`${project.id}`}>
            <button
              onClick={() => {
                info === project ? setInfo({}) : setInfo(project);
              }}
              className="hover:translate-y-1 w-full"
            >
              <div
                className={`w-full text-3xl space-y-2 ${
                  project.name === info.name && "font-bold"
                }`}
              >
                <Image
                  src={project.mediaPath}
                  alt="placeholder"
                  width="500"
                  height="500"
                  className="w-full h-36 object-cover"
                ></Image>
                <p>{project.name}</p>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
