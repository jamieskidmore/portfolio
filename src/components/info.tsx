"use client";

import { useState } from "react";

export default function Info({
  name,
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
    <div className="space-y-6 my-2">
      <h1 className="text-6xl">
        Project Overview:
        <a href={siteHref} target="_blank">
          {` ${name}`}
        </a>
      </h1>
      <div>
        <a
          className="w-full flex justify-center text-3xl bg-green-700 hover:bg-gray-800 hover:text-green-700"
          href={siteHref}
          target="_blank"
        >
          Live site link
        </a>
      </div>
      <div>
        <p>{intro}</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl">Technology</h2>
        <div className="space-y-2">
          {technology.map((technology, index) => (
            <p key={index}>{technology}</p>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl">Key Features</h2>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index}>
              <p>• {feature.description}</p>
              <div>
                {feature.subFeatures &&
                  feature.subFeatures.map((subFeature, index) => (
                    <p key={index} className="pl-4">
                      - {subFeature}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl">Overview</h2>
        <div className="space-y-2">
          {overview.map((overview, index) => (
            <p key={index}>{overview}</p>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl">Motivation</h2>
        <div className="space-y-2">
          <p>{motivation.description}</p>
          <div>
            {motivation.reasons.map((reason, index) => (
              <p key={index}>{reason}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl">Timeline</h2>
        <div>
          <div className="space-y-2">
            <p>{timeline.description}</p>
            <div className="space-y-2">
              {timeline.entries.map((entry, index) => (
                <p key={index}>{entry}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl">Obstables</h2>
        <div className="space-y-2">
          {obstacles.map((obstalce, index) => (
            <p key={index}>{obstalce}</p>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl">Reflection</h2>
        <div className="space-y-2">
          {reflections.map((relflection, index) => (
            <p key={index}>{relflection}</p>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl">Next Steps</h2>
        <div className="space-y-2">
          {nextSteps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2  w-full">
        <a
          className="w-full flex justify-center bg-green-700 hover:bg-gray-800 hover:text-green-700"
          href={githubHref}
          target="_blank"
        >
          View GitHub repository
        </a>
        <a
          className="w-full flex justify-center bg-green-700 hover:bg-gray-800 hover:text-green-700"
          href={siteHref}
          target="_blank"
        >
          Visit the site
        </a>
      </div>
    </div>
  );
}
