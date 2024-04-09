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
    <div className="border-2 space-y-4 px-4 my-2">
      <h1>
        Project Overview:
        <a href="https://www.kvr.vercel.app" target="_blank">
          {name}
        </a>
      </h1>
      <div>
        <p>{intro}</p>
      </div>
      <div>
        <h2>Technology</h2>
        <div className="space-y-2">
          {technology.map((technology, index) => (
            <p>{technology}</p>
          ))}
        </div>
      </div>
      <div>
        <h2>Key Features</h2>
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
      <div>
        <h2>Overview</h2>
        <div className="space-y-2">
          {overview.map((overview, index) => (
            <p key={index}>{overview}</p>
          ))}
        </div>
      </div>
      <div>
        <h2>Motivation</h2>
        <div className="space-y-2">
          <p>{motivation.description}</p>
          <div>
            {motivation.reasons.map((reason, index) => (
              <p key={index}>{reason}</p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2>Timeline</h2>
        <div className="space-y-2">
          <div>
            <p>{timeline.description}</p>
            <div>
              {timeline.entries.map((entry, index) => (
                <p key={index}>{entry}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Obstables</h2>
        <div className="space-y-2">
          {obstacles.map((obstalce, index) => (
            <p key={index}>{obstalce}</p>
          ))}
        </div>
      </div>
      <div>
        <h2>Reflection</h2>
        <div className="space-y-2">
          {reflections.map((relflection, index) => (
            <p key={index}>{relflection}</p>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h2>Next Steps</h2>
        <div>
          {nextSteps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <a
          className="w-full flex justify-center"
          href={githubHref}
          target="_blank"
        >
          Github
        </a>
        <a
          className="w-full flex justify-center"
          href={siteHref}
          target="_blank"
        >
          Visit the site
        </a>
      </div>
    </div>
  );
}
