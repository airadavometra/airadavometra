import { PROJECTS } from "@/constants/projects";
import s from "./ProjectList.module.css";
import { Project } from "./Project/Project";

export const ProjectList = () => {
  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>Projects</h2>
      <ul className={s.projectList}>
        {PROJECTS.map((project) => (
          <li key={project.name}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};
