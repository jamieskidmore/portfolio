"use client";

import Image from "next/image";
import { useState } from "react";

export default function Info({
  name,
  mediaPath,
  intro,
  technology,
  features,
  overview,
  motivation,
  timeline,
  obstacles,
  reflections,
  nextSteps,
  githubHref,
  siteHref,
}: {
  name: string;
  mediaPath: string;
  intro: string;
  technology: string[];
  features: { description: string; subFeatures?: string[] }[];
  overview: string[];
  motivation: { description: string; reasons: string[] };
  timeline: { description: string; entries: string[] };
  obstacles: string[];
  reflections: string[];
  nextSteps: string[];
  githubHref: string;
  siteHref: string;
}) {
  return (
    <div className="space-y-12 my-4">
      <h1 className="text-6xl">Project Overview: {name}</h1>
      <div className="flex justify-center">
        <Image
          src={mediaPath}
          alt="placeholder"
          width="500"
          height="500"
          className="w-full max-w-xl h-64 object-cover"
        ></Image>
      </div>
      <div
        className={`items-center justify-center grid grid-cols-1 w-full space-x-6 ${
          siteHref && "grid-cols-2"
        }`}
      >
        {githubHref && (
          <a
            className="flex text-center p-1 text-3xl bg-green-700 items-center justify-center hover:bg-gray-800 hover:text-green-700"
            href={githubHref}
            target="_blank"
          >
            View on GitHub
          </a>
        )}

        {siteHref && (
          <a
            className="flex text-center p-1 justify-center text-3xl bg-green-700 hover:bg-gray-800 hover:text-green-700"
            href={siteHref}
            target="_blank"
          >
            Visit the site
          </a>
        )}
      </div>
      <div>
        <p>{intro}</p>
      </div>
      <div className="space-y-8">
        <h2 className="text-3xl">Technology</h2>
        <div className="space-y-4">
          {technology.map((technology, index) => (
            <p key={index}>{technology}</p>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-3xl">Key Features</h2>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index}>
              <p>• {feature.description}</p>
              <div>
                {feature.subFeatures &&
                  feature.subFeatures.map((subFeature, index) => (
                    <p key={index} className="pl-8">
                      - {subFeature}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-3xl">Overview</h2>
        <div className="space-y-4">
          {overview.map((overview, index) => (
            <p key={index}>{overview}</p>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-3xl">Motivation</h2>
        <div className="space-y-4">
          <p>{motivation.description}</p>
          <div>
            {motivation.reasons.map((reason, index) => (
              <p key={index}>{reason}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-3xl">Timeline</h2>
        <div>
          <div className="space-y-4">
            <p>{timeline.description}</p>
            <div className="space-y-4">
              {timeline.entries.map((entry, index) => (
                <p key={index}>{entry}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-3xl">Obstables</h2>
        <div className="space-y-4">
          {obstacles.map((obstalce, index) => (
            <p key={index}>{obstalce}</p>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-3xl">Reflection</h2>
        <div className="space-y-4">
          {reflections.map((relflection, index) => (
            <p key={index}>{relflection}</p>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-3xl">Next Steps</h2>
        <div className="space-y-4">
          {nextSteps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
      </div>
      <div
        className={`items-center justify-center grid grid-cols-1 w-full space-x-6 ${
          siteHref && "grid-cols-2"
        }`}
      >
        {githubHref && (
          <a
            className="flex text-center p-1 text-3xl bg-green-700 items-center justify-center hover:bg-gray-800 hover:text-green-700"
            href={githubHref}
            target="_blank"
          >
            View on GitHub
          </a>
        )}

        {siteHref && (
          <a
            className="flex text-center p-1 justify-center text-3xl bg-green-700 hover:bg-gray-800 hover:text-green-700"
            href={siteHref}
            target="_blank"
          >
            Visit the site
          </a>
        )}
      </div>
    </div>
  );
}
