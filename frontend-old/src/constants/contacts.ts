import { Email } from "@/icons/contacts/Email";
import { Github } from "@/icons/contacts/Github";
import { LinkedIn } from "@/icons/contacts/LinkedIn";
import { Telegram } from "@/icons/contacts/Telegram";
import { ContactInfo } from "@/types/contactInfo";

export const CONTACTS: ContactInfo[] = [
  {
    contactLogo: LinkedIn,
    contactText: "LinkedIn",
    contactLink: "https://www.linkedin.com/in/airadavometra/",
  },
  {
    contactLogo: Github,
    contactText: "GitHub",
    contactLink: "https://github.com/airadavometra",
  },
  {
    contactLogo: Email,
    contactText: "E-mail",
    contactValue: "airadavometra@gmail.com",
  },
  {
    contactLogo: Telegram,
    contactText: "Telegram",
    contactLink: "https://t.me/airadavometra",
  },
];
