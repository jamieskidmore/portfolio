export const projectData = [
  {
    id: 0,
    name: "Playlist Converter",
    mediaPath: "/playlist.png",
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
    mediaPath: "/kvr.png",
    intro:
      "The KVR Plumbing and Gas website is a project initiated to enhance an existing website for a client. The primary objective was to improve its design and functionality to better serve the client's business needs.",
    technology: [
      "Frontend: Tailwind, Next.js, TypeScript",
      "Additional Tools: EmailJS, Font Awesome icons",
      "Client Assets: Other assets were provided by the client",
    ],
    features: [
      {
        description:
          "Information Display: The website showcases essential information about KVR Plumbing and Gas, including services offered, contact details, and possibly testimonials",
      },
      {
        description:
          "Contact Form: A contact form is integrated to allow users to reach out to the business directly",
      },
    ],
    overview: [
      "The KVR Plumbing and Gas website revamp aimed to elevate the existing platform, catering to the client's business requirements with enhanced design and functionality. Employing technologies like Tailwind, Next.js, and TypeScript, along with tools like EmailJS and Font Awesome icons, the project integrated client-provided assets seamlessly.",
      "Key features, including service showcases and a user-friendly contact form, were pivotal in achieving the project's objectives. Motivated by the opportunity to uplift the client's online presence, collaboration and responsiveness were paramount throughout the three-week timeline, encompassing design planning, execution, and feedback iterations.",
    ],
    motivation: {
      description: "I undertook this project with the aim of:",
      reasons: [
        "Enhancing the client's website",
        "Recognizing an opportunity to improve its design and functionality",
        "Collaborating with a client and responding to their feedback",
      ],
    },
    timeline: {
      description: "The project was executed within a three-week timeline:",
      entries: [
        "Week 1: Design Planning - Initial discussions with the client, planning the layout and design of the website",
        "Week 2: Execution - Development of the website using Tailwind, Next.js, and TypeScript, integrating features and content",
        "Week 3: Feedback and Iteration - Gathering feedback from the client, making necessary revisions and improvements based on the feedback received",
      ],
    },
    obstacles: [
      "One of the main challenges encountered was with SEO optimization. Despite the improvements made to the website, it is not appearing in search results. To address this, efforts are needed to optimize the site for search engines and acquire backlinks to improve its visibility.",
    ],
    reflections: [
      "Undertaking the KVR Plumbing and Gas website project was a fulfilling experience for me. It allowed me to delve into real-world web development challenges and apply my skills to meet the client's objectives effectively.",
      "Throughout the project, I recognized the significance of client collaboration and responsiveness. Engaging in discussions, understanding their vision, and incorporating their feedback were pivotal in delivering a solution aligned with their expectations.",
      "Witnessing the tangible impact of my work on the client's business was truly rewarding. By enhancing the website's design and functionality, I contributed to bolstering their online presence and potentially expanding their customer base.",
      "Overcoming obstacles such as SEO optimization provided valuable learning opportunities. It prompted me to explore new strategies and techniques, reinforcing the importance of continuous improvement in web development practices.",
      "Overall, the KVR Plumbing and Gas website project served as a valuable learning experience and a testament to my growth as a web developer. I am eager to apply the insights gained from this project to future endeavors, striving to deliver innovative and impactful solutions for clients.",
    ],
    nextSteps: [
      "Moving forward, the next step is to monitor the website's performance using Google Analytics. This will provide valuable insights into user behavior, allowing for further optimization and refinement of the website to better meet the needs of both the client and their audience.",
    ],
    githubHref: "https://github.com/jamieskidmore/kvr",
    siteHref: "https://kvr.vercel.app/",
  },
  {
    id: 2,
    name: "WhiteStone Dental AI",
    mediaPath: "/whitestone.png",
    intro:
      "Whitestone is a collaborative project aimed at improving dental care accessibility for low-income communities through the use of AI technology. Whitestone provides dental health assessments using images taken by users, empowering individuals to take control of their oral health.",
    technology: [
      "Frontend: Tailwind, React, Next.js",
      "Additional Tools: OpenAI API, TensorFlow",
      "Collaboration Tools: Figma, Trello",
    ],
    features: [
      {
        description:
          "Instant Dental Scan: Users can snap a quick picture with their smartphones, and our AI system provides a comprehensive dental health assessment.",
      },
      {
        description:
          "AI-Powered Diagnosis: Receive instant feedback on potential dental problems detected by our AI technology.",
      },
      {
        description:
          "Self-Care Tips & Tricks: Get personalized guidance on managing minor dental issues at home, empowering users to take proactive measures.",
      },
      {
        description:
          "Dental Education Hub: Access a comprehensive resource of dental care content to enhance understanding and awareness of oral health.",
      },
      {
        description:
          "Timely Reminders: Ensure regular dental check-ups with our scan reminders, helping users stay on top of their dental health routine.",
      },
      {
        description:
          "Emergency Alerts: Receive immediate advice for severe dental issues, ensuring timely intervention and assistance.",
      },
    ],
    overview: [
      "The Whitestone project represents a collective effort to address a critical issue in healthcare: accessibility to dental care for low-income communities. By harnessing the power of AI technology, we aim to democratize dental health assessments, empowering individuals to take proactive measures towards their oral well-being. Our platform provides users with instant feedback on their dental health status, along with personalized self-care tips and educational resources. Through regular reminders and emergency alerts, we strive to ensure timely intervention and assistance, ultimately improving overall oral health outcomes. Motivated by a commitment to making a positive impact and gaining valuable experience in AI development, our team embarked on a three-month journey of collaboration and innovation. Looking ahead, our focus lies on integrating database functionality to enable persistent scan storage and further refining our AI prompt to enhance accuracy and effectiveness.",
    ],
    motivation: {
      description:
        "My motivation for working on the Whitestone project stemmed from a desire to:",
      reasons: [
        "Gain experience in using the OpenAI API",
        "Improve AI prompt engineering",
        "Collaborate with a group of developers and designers",
        "Bridge the gap in dental care accessibility and provide a valuable service to underserved communities",
      ],
    },
    timeline: {
      description:
        "The project spanned three months and followed an iterative agile development approach with weekly meetings. Each week, we focused on refining features, addressing feedback, and making continuous improvements to the platform's functionality and user experience.",
      entries: [""],
    },
    obstacles: [
      "One of the main challenges we encountered during the project was related to Git issues, particularly concerning proper version control practices. Learning from these challenges, we implemented stricter protocols, such as always pulling from the main branch before pushing a pull request, to prevent code conflicts and ensure smoother collaboration among team members.",
    ],
    reflections: [
      "Working on the Whitestone project has been an enriching experience for me. Collaborating with a talented group of developers and designers provided valuable insights and learning opportunities. I gained practical experience in AI integration, honed my collaborative skills, and contributed to a meaningful project aimed at improving healthcare accessibility. Witnessing the potential impact of our work on underserved communities has been incredibly rewarding, motivating me to continue exploring innovative solutions to address societal challenges.",
    ],
    nextSteps: [
      "Moving forward, our next priority is to integrate a database system to save scans persistently. This will enable users to access their dental health history and track changes over time, facilitating better monitoring and management of their oral health. Additionally, we plan to continue refining the AI algorithms to enhance accuracy and expand the platform's capabilities further.",
    ],
    githubHref: "https://github.com/WhiteStoneDental/whitestone_IDSP",
    siteHref: "https://www.whitestone-app.com",
  },

  {
    id: 3,
    name: "Poll House",
    mediaPath: "/poll.jpg",
    intro: "wip",
    technology: ["wip"],
    features: [
      {
        description: "wip",
        subFeatures: ["wip"],
      },
      {
        description: "wip",
      },
      {
        description: "wip",
      },
    ],
    overview: ["wip"],
    motivation: {
      description: "wip",
      reasons: ["wip"],
    },
    timeline: {
      description: "wip",
      entries: ["wip"],
    },
    obstacles: ["wip"],
    reflections: ["wip"],
    nextSteps: ["wip"],
    githubHref: "https://github.com/jamieskidmore/poll-signal-r",
    siteHref: "https://pollsignalr.fly.dev/",
  },
  {
    id: 4,
    name: "Eye Photo Systems",
    mediaPath: "/eye-photo-systems.jpeg",
    intro: "wip",
    technology: ["wip"],
    features: [
      {
        description: "wip",
        subFeatures: ["wip"],
      },
      {
        description: "wip",
      },
      {
        description: "wip",
      },
    ],
    overview: ["wip"],
    motivation: {
      description: "wip",
      reasons: ["wip"],
    },
    timeline: {
      description: "wip",
      entries: ["wip"],
    },
    obstacles: ["wip"],
    reflections: ["wip"],
    nextSteps: ["wip"],
    // githubHref: "https://github.com/jamieskidmore/playlist",
    // siteHref: "https://playlist-dusky.vercel.app/",
  },
  {
    id: 5,
    name: "Lightspeed Game",
    mediaPath: "/lightspeed.png",
    intro:
      "Lightspeed is a thrilling JavaScript minigame developed as part of a larger web browser board game project. Within the expansive universe of the board game, Lightspeed offers users the exhilarating experience of piloting a spaceship through an obstacle-filled obstacle course, including comets, asteroids, and black holes.",
    technology: ["Frontend: Phaser, JavaScript, CSS, HTML", "Hosting: Vercel"],
    features: [
      {
        description:
          "Ship Movement: Users can navigate their spaceship using the arrow keys, dodging obstacles and collecting stars",
      },
      {
        description:
          "Point System: Players gain points by collecting stars scattered throughout the obstacle course",
      },
      {
        description: "Obstacles:",
        subFeatures: [
          "Black Holes: These formidable entities exert gravitational force, pulling the spaceship towards them",
          "Comets: These fast-moving celestial bodies slow down the ship upon collision",
          "Asteroids: Impact with asteroids reduces the spaceship's health, adding an element of challenge to the game",
        ],
      },
    ],
    overview: [
      "Lightspeed immerses players in an exciting journey through space, where quick reflexes and strategic maneuvering are essential for survival. As users pilot their spacecraft through a perilous obstacle course, they must navigate through comets, asteroids, and black holes while collecting stars to earn points. With engaging gameplay and dynamic challenges, Lightspeed offers a captivating gaming experience for players of all ages.",
    ],
    motivation: {
      description: "My goals in making this project were to:",
      reasons: [
        "Gain proficiency in using Phaser, a popular game development framework",
        "Collaborate with a team using collaboration tools such as Git and kanban boards",
      ],
    },
    timeline: {
      description: "The development of Lightspeed was rapid:",
      entries: [
        "Week 1: Daily sprints focused on continuous improvements and adjustments to enhance gameplay and user experience.",
        "Week 2: Integration into larger board game.",
      ],
    },
    obstacles: [
      "One of the main challenges encountered during the development of Lightspeed was the need to learn as I progressed rather than thoroughly researching the Phaser API at the outset. While this approach allowed for quick prototyping and experimentation, it also led to occasional roadblocks and inefficiencies in development.",
    ],
    reflections: [
      "Working on Lightspeed provided valuable insights into game development and collaborative teamwork. It offered an opportunity to apply theoretical knowledge in a practical setting, navigate challenges, and contribute to a collective vision. Moreover, the experience fostered a sense of camaraderie and shared accomplishment among team members, reinforcing the value of collaboration in achieving project goals.",
    ],
    nextSteps: [
      "Moving forward, the next phase of Lightspeed's development involves implementing websockets to introduce multiplayer functionality. By enabling real-time interactions between players, we aim to enhance the game's social and competitive aspects, providing an engaging and immersive gaming experience for a broader audience.",
    ],
    githubHref: "https://github.com/jamieskidmore/meteorShowerMinigame",
    siteHref: "https://jamieskidmore.github.io/meteorShowerMinigame/",
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
