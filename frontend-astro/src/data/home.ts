import heroImage from "../assets/hero.png";
import aboutImage from "../assets/about.png";
import contactImage from "../assets/contact.png";
import cvUrl from "../assets/daria-artemova-cv.pdf?url";

export interface ExperienceItem {
  title: string;
  duration: string;
  /** One string per paragraph */
  description: string[];
}

export const home = {
  /** "Name — Role": the hidden page heading, and the name and job title in the structured data */
  title: "Daria Artemova — Front-end developer",
  heroImage,
  about: {
    /** Decorative: rendered with an empty alt */
    image: aboutImage,
    title: "Hey, I'm Daria.",
    subtitle:
      "Passionate front-end dev, accessibility nerd, and person-who-cares-about-details.",
    /** One string per paragraph */
    description: [
      "I take messy ideas and turn them into shipped features, working closely with designers and stakeholders along the way. I care about user experience, clean code, and teamwork that feels good.",
      "Outside of work, I like to draw and make indie games with my partner — lots of fun and learning!",
    ],
  },
  cvUrl,
  experienceYears: 9,
  experience: [
    {
      title: "Software Developer @ Reaktor",
      duration: "2022 - Now",
      description: [
        "Consulting made my problem-solving skills level up fast, because it often starts with ambiguity. Sometimes clients don’t know what they need, and sometimes they’re very sure… and still wrong. A big part of my work is finding the real pain, often with very little info at the start. The best part is getting to do that with all kinds of teams, from startups to huge companies, and making an impact each time.",
      ],
    },
    {
      title: "Front-end Developer @ Raiffeisen",
      duration: "2021 - 2022",
      description: [
        "This job gave me some challenging frontend experience: data-heavy dashboards, huge editable tables, and tricky calculations that had to stay fast. It wasn’t my first job, but it still came with a lot of “first” moments. That’s where I started thinking seriously about accessibility and worked closely with a designer (and loved it). I also learned that admin tools matter just as much as “real user” interfaces, and that building a truly good design system table is basically an impossible task.",
      ],
    },
    {
      title: "Full Stack Developer @ MTS IT",
      duration: "2017 - 2021",
      description: [
        "My first job, and my entry into real software development. My first pull requests, my first production bugs, my first “agh… who wrote this? oh. me.” moments. The codebase was a legacy mess, but I got to work on core functionality used by millions every day. The biggest lesson I took with me: always ask “why?” when a new requirement shows up. Surprisingly often it unlocks a cleaner, better solution than what we started with.",
      ],
    },
  ] satisfies ExperienceItem[],
  githubLink: "https://github.com/airadavometra",
  linkedinLink: "https://linkedin.com/in/airadavometra",
  email: "airadavometra@gmail.com",
  contact: {
    title: "Reach me here",
    image: contactImage,
  },
};
