import { WidthContainer } from "@/components/WidthContainer/WidthContainer";
import s from "./page.module.css";
import { DownloadCvButton } from "./DownloadCvButton/DownloadCvButton";
import { SkillList } from "./SkillList/SkillList";
import { CareerTimeline } from "./CareerTimeline/CareerTimeline";
import { ProjectList } from "./ProjectList/ProjectList";
import { GithubLink } from "./GithubLink/GithubLink";
import { Metadata } from "next";
import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";

export const metadata: Metadata = {
  title: "Daria Artemova - Portfolio",
};

export default function PortfolioPage() {
  return (
    <WidthContainer className={s.widthContainer}>
      <VisuallyHidden>
        <h1>Portfolio</h1>
      </VisuallyHidden>
      <div className={s.reverseOrderOnMobile}>
        <section className={s.downloadCv}>
          <DownloadCvButton />
        </section>
        <div className={s.skillsAndExperience}>
          <CareerTimeline />
          <SkillList />
        </div>
      </div>
      <ProjectList />
      <GithubLink />
    </WidthContainer>
  );
}
