import s from "./page.module.css";
import { WidthContainer } from "@/components/WidthContainer/WidthContainer";
import { CONTACTS } from "@/constants/contacts";
import { ContactLink } from "@/app/contact/ContactLink/ContactLink";
import { Map } from "@/app/contact/Map/Map";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daria Artemova - Contact",
};

export default function ContactPage() {
  return (
    <WidthContainer className={s.widthContainer}>
      <section className={s.section}>
        <div className={s.mapContainer}>
          <Map />
        </div>
        <div className={s.contacts}>
          <h1 className={s.title}>You can reach me here</h1>
          <ul className={s.contactList}>
            {CONTACTS.map((item, index) => (
              <li key={index}>
                <ContactLink contact={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </WidthContainer>
  );
}
