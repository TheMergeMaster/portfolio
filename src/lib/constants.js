import linkedinIcon from "@assets/icons/linkedin.svg";
import instagramIcon from "@assets/icons/instagram.svg";
import gmailIcon from "@assets/icons/gmail.svg";
import xIcon from "@assets/icons/x.svg";
import githubIcon from "@assets/icons/github.svg";

export const socialLinks = [
  {
    url: "https://github.com/TheMergeMaster",
    name: "GitHub",
    iconPath: githubIcon,
  },
  {
    url: "https://x.com/TheMergeMaster",
    name: "X (Twitter)",
    iconPath: xIcon,
  },
  {
    url: "mailto:gautamtiwari.dev@gmail.com",
    name: "GMail",
    iconPath: gmailIcon,
  },
  {
    url: "https://instagram.com/TheMergeMaster",
    name: "Instagram",
    iconPath: instagramIcon,
  },
  {
    url: "https://linkedin.com/in/TheMergeMaster",
    name: "LinkedIn",
    iconPath: linkedinIcon,
  },
];

export const projects = [
  {
    imgPath: "https://picsum.photos/308/262",
    name: "Firm website",
    tags: ["SvelteKit", "Docker", "Nginx", "Cloud Hosting"],
    desc: "I built a website using SvelteKit and TailwindCSS, then containerized it with Docker for smoother deployment. I set up Nginx as a reverse proxy and configured Let's Encrypt for SSL, hosting everything on a shared Kamatera Cloud server. For inquiries, I added email functionality with NodeMailer.js and used SSH to manage the server — pretty straightforward, but it keeps things stable.",
  },
  {
    imgPath: "https://picsum.photos/308/262",
    name: "Trato",
    tags: ["Next.js", "React-OAuth", "react-redux"],
    desc: "I worked on a Next.js website focused on performance and SEO, and added Google sign-in using React-OAuth to make login easier. I also created a custom hook for managing authentication state and protected some routes to keep things secure. To handle orders, I used react-redux to keep the data flow organized.",
  },
  {
    imgPath: "https://picsum.photos/308/262",
    name: "Audio Editor",
    tags: ["Python", "Tkinter", "pydub", "Standalone application"],
    desc: "I created a simple GUI for audio editing in Python with Tkinter, adding PyDub for core functionality like trimming, joining, and reversing tracks. I also set up an undo/redo feature with a stack, so users could easily correct changes. To make it more accessible, I bundled everything into a standalone executable — no Python installation needed.",
  },
];
