export const projectData = [
  {
    id: 0,
    name: "Playlist Converter",
    mediaPath: "/music.jpg",
    intro:
      "This project is a free web application that converts playlists between popular music streaming platforms. The app connects popular third-party platforms such as Spotify or Apple Music and creates copies of playlists from the opposite platform on the linked account when provided with a unique public playlist URL.",
    technology: [
      "Frontend: Next.js, React, Tailwind",
      "Backend: Neon database",
      "APIs: Spotify API, Apple Music API, emailjs",
      "Hosting: Vercel",
    ],
    features: [
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
    ],
    overview: [
      "I challenged myself to create this app to try something different and help manage my music collection as I use both Spotify and Apple Music.",
      "Music listeners who are switching from one platform to another can use this app to efficiently migrate their entire music library and all of their playlists. This app can also serve anyone wanting to share music with friends who use a different platform.",
      "Despite paying for access to the Apple Music API through an Apple Developer subscription, I decided to keep this application free to ensure that converting playlists remains accessible for all. I think that playlists can be an important tool for connection and creativity, and I want to help make sharing playlists easier",
    ],
    motivation: {
      description:
        "In addition to wanting to solve an issue I was facing, I began developing this project with the following goals in mind:",
      reasons: [
        "Increasing my familiarity with creating applications that use the React library and Next.js framework",
        "Learning how to use APIs to extend the functionality of applications that I use regularly",
        "Challenging myself to combine separate APIs to create a unified, cohesive product",
      ],
    },
    timeline: {
      description:
        "To develop this application, I followed this focused timeline:",
      entries: [
        "Week 1: Decided tech stack; read Spotify and Apple API documentation; created frontend boilerplate, hosted app on Vercel",
        "Week 2: Integrated conversion of playlists from Apple-Spotify",
        "Week 3: Integrated conversion of playlists from Spotify-Apple",
        "Week 4: Styled frontend; connected database; wrote database queries; integrated database queries into frontend",
      ],
    },
    obstacles: [
      "While integrating Spotify and Apple Music into the playlist converter was successful, my original plan for the playlist converter involved a third streaming platform. I also use SoundCloud to stream music and hoped to implement the ability to transfer Spotify and Apple Music playlists to SoundCloud using the SoundCloud API. Unfortunately, public access to the API is indefinitely suspended but I have developed this platform with expansion in mind. I will return to this feature in the future with SoundCloud or another streaming service!",
      "During testing of playlist conversion from Spotify to Apple Music, I discovered that some songs from the Spotify playlists would not appear on the Apple Music versions. To maintain steady progress toward a functional app prototype, I decided to add a list of missed songs rather than trying to find matches for the songs. This decision ensured that users would not be confused on an inconsistency, and so that the unexpected bug did not delay progress on the application while still addressing the problem.",
    ],
    reflections: [
      "So far, working on this project has increased my confidence in working with APIs and adapting to challenges in the development process. I feel a lot of satisfaction from having created a tool that I now use in my daily life!",
      "If I could start this project from scratch, I would have thought more about user authentication before beginning development, and gone with an authentication library such as NextAuth. Currently, the app authenticates Spotify and Apple Music accounts using each library’s custom authentication strategy. This approach works on a small scale, but would not be ideal when integrating additional streaming platforms into the application, because each platform needs its authentication. Libraries such as NextAuth streamline authentication resulting in a more scalable product.",
    ],
    nextSteps: [
      "Right now, I’m working on improving the experience when a match for a song is not identified during playlist conversion. The goal is to show the closest match to the missing song and suggest adding it to the playlist. I want this suggestion to happen in real time while the playlist is being generated in order to preserve song order in the playlist",
      "Check back soon for updates!",
    ],
    githubHref: "https://github.com/jamieskidmore/playlist",
    siteHref: "https://playlist-dusky.vercel.app/",
  },
  {
    id: 1,
    name: "KVR Plumbing & Gas",
    mediaPath: "/placeholder.png",
    intro:
      "This project is a custom website that I created for a client's contracting business.",
    technology: [
      "Frontend: TypeScript, Next.js, React, Tailwind",
      "APIs: emailjs",
      "Hosting: Vercel",
    ],
    features: [
      {
        description:
          "Requesting quotes: Submit a quote request using the email form",
      },
      {
        description: "SEO: Optimized for search enginges",
      },
    ],
    overview: ["write something"],
    motivation: {
      description: "write something",
      reasons: ["write something"],
    },
    timeline: {
      description:
        "To develop this application, I followed this focused timeline:",
      entries: ["write something"],
    },
    obstacles: ["write something"],
    reflections: ["write something"],
    nextSteps: ["write something"],
    githubHref: "https://github.com/jamieskidmore/kvr",
    siteHref: "https://kvr.vercel.app/",
  },
  {
    id: 2,
    name: "WhiteStone Dental AI",
    mediaPath: "/music.jpg",
    intro:
      "This project is a free web application that converts playlists between popular music streaming platforms. The app connects popular third-party platforms such as Spotify or Apple Music and creates copies of playlists from the opposite platform on the linked account when provided with a unique public playlist URL.",
    technology: [
      "Frontend: Next.js, React, Tailwind",
      "Backend: Neon database",
      "APIs: Spotify API, Apple Music API, emailjs",
      "Hosting: Vercel",
    ],
    features: [
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
    ],
    overview: [
      "I challenged myself to create this app to try something different and help manage my music collection as I use both Spotify and Apple Music.",
      "Music listeners who are switching from one platform to another can use this app to efficiently migrate their entire music library and all of their playlists. This app can also serve anyone wanting to share music with friends who use a different platform.",
      "Despite paying for access to the Apple Music API through an Apple Developer subscription, I decided to keep this application free to ensure that converting playlists remains accessible for all. I think that playlists can be an important tool for connection and creativity, and I want to help make sharing playlists easier",
    ],
    motivation: {
      description:
        "In addition to wanting to solve an issue I was facing, I began developing this project with the following goals in mind:",
      reasons: [
        "Increasing my familiarity with creating applications that use the React library and Next.js framework",
        "Learning how to use APIs to extend the functionality of applications that I use regularly",
        "Challenging myself to combine separate APIs to create a unified, cohesive product",
      ],
    },
    timeline: {
      description:
        "To develop this application, I followed this focused timeline:",
      entries: [
        "Week 1: Decided tech stack; read Spotify and Apple API documentation; created frontend boilerplate, hosted app on Vercel",
        "Week 2: Integrated conversion of playlists from Apple-Spotify",
        "Week 3: Integrated conversion of playlists from Spotify-Apple",
        "Week 4: Styled frontend; connected database; wrote database queries; integrated database queries into frontend",
      ],
    },
    obstacles: [
      "While integrating Spotify and Apple Music into the playlist converter was successful, my original plan for the playlist converter involved a third streaming platform. I also use SoundCloud to stream music and hoped to implement the ability to transfer Spotify and Apple Music playlists to SoundCloud using the SoundCloud API. Unfortunately, public access to the API is indefinitely suspended but I have developed this platform with expansion in mind. I will return to this feature in the future with SoundCloud or another streaming service!",
      "During testing of playlist conversion from Spotify to Apple Music, I discovered that some songs from the Spotify playlists would not appear on the Apple Music versions. To maintain steady progress toward a functional app prototype, I decided to add a list of missed songs rather than trying to find matches for the songs. This decision ensured that users would not be confused on an inconsistency, and so that the unexpected bug did not delay progress on the application while still addressing the problem.",
    ],
    reflections: [
      "So far, working on this project has increased my confidence in working with APIs and adapting to challenges in the development process. I feel a lot of satisfaction from having created a tool that I now use in my daily life!",
      "If I could start this project from scratch, I would have thought more about user authentication before beginning development, and gone with an authentication library such as NextAuth. Currently, the app authenticates Spotify and Apple Music accounts using each library’s custom authentication strategy. This approach works on a small scale, but would not be ideal when integrating additional streaming platforms into the application, because each platform needs its authentication. Libraries such as NextAuth streamline authentication resulting in a more scalable product.",
    ],
    nextSteps: [
      "Right now, I’m working on improving the experience when a match for a song is not identified during playlist conversion. The goal is to show the closest match to the missing song and suggest adding it to the playlist. I want this suggestion to happen in real time while the playlist is being generated in order to preserve song order in the playlist",
      "Check back soon for updates!",
    ],
    githubHref: "https://github.com/jamieskidmore/playlist",
    siteHref: "https://playlist-dusky.vercel.app/",
  },
  {
    id: 3,
    name: "Poll House",
    mediaPath: "/music.jpg",
    intro:
      "This project is a free web application that converts playlists between popular music streaming platforms. The app connects popular third-party platforms such as Spotify or Apple Music and creates copies of playlists from the opposite platform on the linked account when provided with a unique public playlist URL.",
    technology: [
      "Frontend: Next.js, React, Tailwind",
      "Backend: Neon database",
      "APIs: Spotify API, Apple Music API, emailjs",
      "Hosting: Vercel",
    ],
    features: [
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
    ],
    overview: [
      "I challenged myself to create this app to try something different and help manage my music collection as I use both Spotify and Apple Music.",
      "Music listeners who are switching from one platform to another can use this app to efficiently migrate their entire music library and all of their playlists. This app can also serve anyone wanting to share music with friends who use a different platform.",
      "Despite paying for access to the Apple Music API through an Apple Developer subscription, I decided to keep this application free to ensure that converting playlists remains accessible for all. I think that playlists can be an important tool for connection and creativity, and I want to help make sharing playlists easier",
    ],
    motivation: {
      description:
        "In addition to wanting to solve an issue I was facing, I began developing this project with the following goals in mind:",
      reasons: [
        "Increasing my familiarity with creating applications that use the React library and Next.js framework",
        "Learning how to use APIs to extend the functionality of applications that I use regularly",
        "Challenging myself to combine separate APIs to create a unified, cohesive product",
      ],
    },
    timeline: {
      description:
        "To develop this application, I followed this focused timeline:",
      entries: [
        "Week 1: Decided tech stack; read Spotify and Apple API documentation; created frontend boilerplate, hosted app on Vercel",
        "Week 2: Integrated conversion of playlists from Apple-Spotify",
        "Week 3: Integrated conversion of playlists from Spotify-Apple",
        "Week 4: Styled frontend; connected database; wrote database queries; integrated database queries into frontend",
      ],
    },
    obstacles: [
      "While integrating Spotify and Apple Music into the playlist converter was successful, my original plan for the playlist converter involved a third streaming platform. I also use SoundCloud to stream music and hoped to implement the ability to transfer Spotify and Apple Music playlists to SoundCloud using the SoundCloud API. Unfortunately, public access to the API is indefinitely suspended but I have developed this platform with expansion in mind. I will return to this feature in the future with SoundCloud or another streaming service!",
      "During testing of playlist conversion from Spotify to Apple Music, I discovered that some songs from the Spotify playlists would not appear on the Apple Music versions. To maintain steady progress toward a functional app prototype, I decided to add a list of missed songs rather than trying to find matches for the songs. This decision ensured that users would not be confused on an inconsistency, and so that the unexpected bug did not delay progress on the application while still addressing the problem.",
    ],
    reflections: [
      "So far, working on this project has increased my confidence in working with APIs and adapting to challenges in the development process. I feel a lot of satisfaction from having created a tool that I now use in my daily life!",
      "If I could start this project from scratch, I would have thought more about user authentication before beginning development, and gone with an authentication library such as NextAuth. Currently, the app authenticates Spotify and Apple Music accounts using each library’s custom authentication strategy. This approach works on a small scale, but would not be ideal when integrating additional streaming platforms into the application, because each platform needs its authentication. Libraries such as NextAuth streamline authentication resulting in a more scalable product.",
    ],
    nextSteps: [
      "Right now, I’m working on improving the experience when a match for a song is not identified during playlist conversion. The goal is to show the closest match to the missing song and suggest adding it to the playlist. I want this suggestion to happen in real time while the playlist is being generated in order to preserve song order in the playlist",
      "Check back soon for updates!",
    ],
    githubHref: "https://github.com/jamieskidmore/playlist",
    siteHref: "https://playlist-dusky.vercel.app/",
  },
  {
    id: 4,
    name: "Eye Photo Systems",
    mediaPath: "/music.jpg",
    intro:
      "This project is a free web application that converts playlists between popular music streaming platforms. The app connects popular third-party platforms such as Spotify or Apple Music and creates copies of playlists from the opposite platform on the linked account when provided with a unique public playlist URL.",
    technology: [
      "Frontend: Next.js, React, Tailwind",
      "Backend: Neon database",
      "APIs: Spotify API, Apple Music API, emailjs",
      "Hosting: Vercel",
    ],
    features: [
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
    ],
    overview: [
      "I challenged myself to create this app to try something different and help manage my music collection as I use both Spotify and Apple Music.",
      "Music listeners who are switching from one platform to another can use this app to efficiently migrate their entire music library and all of their playlists. This app can also serve anyone wanting to share music with friends who use a different platform.",
      "Despite paying for access to the Apple Music API through an Apple Developer subscription, I decided to keep this application free to ensure that converting playlists remains accessible for all. I think that playlists can be an important tool for connection and creativity, and I want to help make sharing playlists easier",
    ],
    motivation: {
      description:
        "In addition to wanting to solve an issue I was facing, I began developing this project with the following goals in mind:",
      reasons: [
        "Increasing my familiarity with creating applications that use the React library and Next.js framework",
        "Learning how to use APIs to extend the functionality of applications that I use regularly",
        "Challenging myself to combine separate APIs to create a unified, cohesive product",
      ],
    },
    timeline: {
      description:
        "To develop this application, I followed this focused timeline:",
      entries: [
        "Week 1: Decided tech stack; read Spotify and Apple API documentation; created frontend boilerplate, hosted app on Vercel",
        "Week 2: Integrated conversion of playlists from Apple-Spotify",
        "Week 3: Integrated conversion of playlists from Spotify-Apple",
        "Week 4: Styled frontend; connected database; wrote database queries; integrated database queries into frontend",
      ],
    },
    obstacles: [
      "While integrating Spotify and Apple Music into the playlist converter was successful, my original plan for the playlist converter involved a third streaming platform. I also use SoundCloud to stream music and hoped to implement the ability to transfer Spotify and Apple Music playlists to SoundCloud using the SoundCloud API. Unfortunately, public access to the API is indefinitely suspended but I have developed this platform with expansion in mind. I will return to this feature in the future with SoundCloud or another streaming service!",
      "During testing of playlist conversion from Spotify to Apple Music, I discovered that some songs from the Spotify playlists would not appear on the Apple Music versions. To maintain steady progress toward a functional app prototype, I decided to add a list of missed songs rather than trying to find matches for the songs. This decision ensured that users would not be confused on an inconsistency, and so that the unexpected bug did not delay progress on the application while still addressing the problem.",
    ],
    reflections: [
      "So far, working on this project has increased my confidence in working with APIs and adapting to challenges in the development process. I feel a lot of satisfaction from having created a tool that I now use in my daily life!",
      "If I could start this project from scratch, I would have thought more about user authentication before beginning development, and gone with an authentication library such as NextAuth. Currently, the app authenticates Spotify and Apple Music accounts using each library’s custom authentication strategy. This approach works on a small scale, but would not be ideal when integrating additional streaming platforms into the application, because each platform needs its authentication. Libraries such as NextAuth streamline authentication resulting in a more scalable product.",
    ],
    nextSteps: [
      "Right now, I’m working on improving the experience when a match for a song is not identified during playlist conversion. The goal is to show the closest match to the missing song and suggest adding it to the playlist. I want this suggestion to happen in real time while the playlist is being generated in order to preserve song order in the playlist",
      "Check back soon for updates!",
    ],
    githubHref: "https://github.com/jamieskidmore/playlist",
    siteHref: "https://playlist-dusky.vercel.app/",
  },
];

export const skills: string[] = [
  "Typescript",
  "Javascript",
  "Node.js",
  "Express.js",
  "React",
  "PHP",
  "Python",
  "Electron",
  "Next.js",
  "MySQL",
];
