import { FC } from "react";
import s from "./ContactLink.module.css";
import { ContactInfo } from "@/types/contactInfo";
import Link from "next/link";
import { ContactLinkMotionWrapper } from "./ContactLinkMotionWrapper";
import { EmailButton } from "./EmailButton";

type ContactLinkProps = {
  contact: ContactInfo;
};

export const ContactLink: FC<ContactLinkProps> = ({
  contact: {
    contactLogo: Logo,
    contactLink: link,
    contactText: text,
    contactValue: value,
  },
}) => {
  return link ? (
    <ContactLinkMotionWrapper>
      <Link href={link} className={s.link}>
        <Logo className={s.linkLogo} aria-hidden />
        {text}
      </Link>
    </ContactLinkMotionWrapper>
  ) : value ? (
    <ContactLinkMotionWrapper>
      <EmailButton email={value}>
        <Logo className={s.linkLogo} aria-hidden />
        {text}
      </EmailButton>
    </ContactLinkMotionWrapper>
  ) : null;
};
