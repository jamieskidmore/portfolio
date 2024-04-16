import Image from "next/image";
import { projectData } from "../../data";
import Link from "next/link";

export default function Projects({
  info,
  setInfo,
}: {
  info?: any;
  setInfo?: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="space-y-12 w-full">
      {info ? (
        <div
          className={`flex w-full items-center text-6xl ${
            !info.name && "hidden"
          }`}
        >
          <p>Projects</p>
        </div>
      ) : (
        <div className={"flex w-full items-center text-6xl"}>
          <p>Projects</p>
        </div>
      )}

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-16">
        {projectData.map((project, index) =>
          info && setInfo ? (
            <Link key={index} href={`${project.id}`}>
              <button
                onClick={() => {
                  info === project ? setInfo({}) : setInfo(project);
                }}
                className="hover:translate-y-1 w-full"
              >
                <div
                  className={`w-full text-3xl space-y-4 ${
                    project.name === info.name && "font-bold"
                  }`}
                >
                  <Image
                    src={project.mediaPath}
                    alt="placeholder"
                    width="500"
                    height="500"
                    className="w-full h-64 object-cover"
                  ></Image>
                  <p>{project.name}</p>
                </div>
              </button>
            </Link>
          ) : (
            <Link key={index} href={`projects/${project.id}`}>
              <div className="hover:translate-y-1 w-full">
                <div className={`w-full text-3xl space-y-4`}>
                  <Image
                    src={project.mediaPath}
                    alt="placeholder"
                    width="500"
                    height="500"
                    className="w-full h-64 object-cover"
                  ></Image>
                  <p>{project.name}</p>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
