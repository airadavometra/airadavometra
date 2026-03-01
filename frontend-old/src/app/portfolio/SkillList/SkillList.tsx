import s from "./SkillList.module.css";
import { SKILLS } from "@/constants/skills";
import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";
import { SkillItemMotionWrapper } from "./SkillItemMotionWrapper";
import { SkillItemTooltipWrapper } from "./SkillItemTooltipWrapper";

export const SkillList = () => {
  return (
    <section className={s.skillSection}>
      <h2 className={s.sectionTitle}>Skills</h2>
      <ul className={s.skillList}>
        {SKILLS.map((item) => (
          <li className={s.skillItem} key={item.skillName}>
            <h3 className={s.skillTitle}>{item.skillName}</h3>
            <ul className={s.iconList}>
              {item.skillLogos.map(({ logo: Logo, logoAlt }) => (
                <li key={logoAlt}>
                  <SkillItemTooltipWrapper
                    content={logoAlt}
                    trigger={
                      <SkillItemMotionWrapper>
                        <Logo className={s.icon} aria-hidden />
                        <VisuallyHidden>{logoAlt}</VisuallyHidden>
                      </SkillItemMotionWrapper>
                    }
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
