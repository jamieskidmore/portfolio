"use client";

import Info from "@/components/info";
import { useEffect, useState } from "react";
import { projectData } from "../../../../data";
import Projects from "@/components/projects";

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
    <div className="mt-20 w-full flex flex-col items-center text-gray-300 space-y-24 mb-24">
      <div className="min-h-32 w-full flex flex-col items-left justify-center">
        {info.name ? (
          <Info
            name={info.name}
            mediaPath={info.mediaPath}
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
      <Projects info={info} setInfo={setInfo} />
    </div>
  );
}
