import Image from "next/image";
import Link from "next/link";
import { projectData, skills } from "../../data";

export default function Home() {
  return (
    <main className="mx-auto text-center flex flex-col justify-center items-center mb-12">
      <div className="flex min-h-screen items-center">
        <div className="w-full">
          <h1 className="font-bold text-6xl my-10">Jamie Skidmore</h1>
          <p className="text-xl">
            Full stack web developer in Vancouver, British Columbia
          </p>
        </div>
      </div>
      <div className="w-full space-y-12">
        <div className="space-y-10">
          <h2 className="text-left text-3xl mb-5 ">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-8 gap-x-2 text-lg">
            {skills.map((skill, index) => (
              <div key={index}>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-10">
          <h2 className="text-left text-3xl">Projects</h2>
          <div className="grid grid-cols-1 gap-y-8 gap-x-2 text-lg max-w-6xl mx-auto">
            {projectData.map((project, index) => (
              <div className="space-y-6" key={index}>
                <div>
                  <Link href={`/projects/${project.id}`}>
                    <h3 className="w-full hover:bg-green-700 text-2xl">
                      {project.name}
                    </h3>
                  </Link>
                </div>
                <div>
                  <a href={project.siteHref} target="_blank">
                    <Image
                      src={project.mediaPath}
                      alt="placeholder"
                      width="1"
                      height="1"
                      className="w-full h-24 object-cover blur"
                    ></Image>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
