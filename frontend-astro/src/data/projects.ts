import justMyPlans1 from "../assets/projects/just-my-plans-1.png";
import justMyPlans2 from "../assets/projects/just-my-plans-2.png";
import justMyPlans3 from "../assets/projects/just-my-plans-3.png";
import justMyPlans4 from "../assets/projects/just-my-plans-4.png";
import justMyPlans5 from "../assets/projects/just-my-plans-5.png";
import justMyCycle1 from "../assets/projects/just-my-cycle-1.png";
import justMyCycle2 from "../assets/projects/just-my-cycle-2.png";
import justMyCycle3 from "../assets/projects/just-my-cycle-3.png";
import justMyCycle4 from "../assets/projects/just-my-cycle-4.png";
import justMyCycle5 from "../assets/projects/just-my-cycle-5.png";
import visualImpairmentsSimulator from "../assets/projects/visual-impairments-simulator.png";
import possumRiot from "../assets/projects/possum-riot.png";
import typeCoercionQuiz from "../assets/projects/type-coercion-quiz.png";
import familyTree from "../assets/projects/family-tree.png";

export interface Project {
  title: string;
  year: string;
  /** Without a link the title is plain text */
  link?: string;
  description: string;
  tags: string[];
  /** The first is the cover; the thumbnail strip only shows with two or more */
  screenshots: ImageMetadata[];
}

export const projects: Project[] = [
  {
    title: "Just my plans",
    year: "2024",
    description:
      "Most planners I tried were overcomplicated and started giving me Jira vibes. I just wanted a to-do list with a calendar, so after years of searching I built my own. Simple, effective, and part of my daily survival kit. It's for personal use only, so there's no public link.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "PWA",
      "Zustand",
      "TinyBase",
      "Cloudflare Workers",
      "Firebase Auth",
    ],
    screenshots: [
      justMyPlans1,
      justMyPlans2,
      justMyPlans3,
      justMyPlans4,
      justMyPlans5,
    ],
  },
  {
    title: "Just my cycle",
    year: "2025",
    description:
      "Tracking your cycle is really useful, but a lot of apps make it way more complicated than it should be. So I vibe-coded my own minimal tracker by reusing ideas (and code) from my planner app. Two days from idea to deploy, still kind of amazed. It's for personal use only, so there's no public link.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "PWA",
      "Zustand",
      "TinyBase",
      "Cloudflare Workers",
      "Firebase Auth",
    ],
    screenshots: [
      justMyCycle1,
      justMyCycle2,
      justMyCycle3,
      justMyCycle4,
      justMyCycle5,
    ],
  },
  {
    title: "Simulator of Visual Impairments",
    year: "2023",
    link: "https://chromewebstore.google.com/detail/imohhjdbajiihdogpnphgbocfodbofip",
    description:
      "A tiny tool that helps you “see” how a UI looks with different visual impairments. It started as a way to demonstrate visibility issues and build a bit of empathy and awareness, but it quickly turned into a testing tool I use all the time. The font scaling option is my personal favourite.",
    tags: ["Plasmo", "TypeScript", "React", "TailwindCSS"],
    screenshots: [visualImpairmentsSimulator],
  },
  {
    title: "Possum Riot website",
    year: "2025",
    link: "https://www.possumriot.com/",
    description:
      "My partner and I are into indie game dev, and at some point we needed a proper home for our studio. So I built a simple yet functional website that’s easy to update as we grow. It’s our little hub for industry folks, where they can quickly find a press kit, downloadable assets, and contact info.",
    tags: ["React", "TypeScript", "Next.js", "Sanity", "Copilot"],
    screenshots: [possumRiot],
  },
  {
    title: "JS Type Coercion Quiz",
    year: "2021, 2024",
    link: "https://type-coercion-quiz.vercel.app/",
    description:
      'You know those JS memes like “why does 4 + "2" return "42"?” I made a silly little quiz about that, mostly to entertain myself and my friends. Later I came back, redesigned it, and added notes and explanations so it’s more useful now. It’s written in TypeScript now, which is kinda ironic (:',
    tags: ["React", "TypeScript", "Vite"],
    screenshots: [typeCoercionQuiz],
  },
  {
    title: "Family Tree",
    year: "2022",
    link: "https://family-tree-tau.vercel.app/",
    description:
      "My dad and uncles are genuinely into family history, so this started as a way to capture what they knew. It was my first proper pet project, and I definitely overdid it with the design. It’s one of those projects where you look at the design and the code and go: wow, I’ve grown.",
    tags: ["React", "TypeScript", "Next.js"],
    screenshots: [familyTree],
  },
];
