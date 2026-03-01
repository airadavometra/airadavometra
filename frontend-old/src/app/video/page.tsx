import s from "./page.module.css";
import { VIDEO_LINKS } from "@/constants/videoLinks";
import { VideoItem } from "@/app/video/VideoItem/VideoItem";
import { Metadata } from "next";
import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";

export const metadata: Metadata = {
  title: "Daria Artemova - Drone video gallery",
};

export default function VideoPage() {
  return (
    <>
      <VisuallyHidden>
        <h1>Drone video gallery</h1>
      </VisuallyHidden>
      <section className={s.section}>
        <ul className={s.videoList}>
          {VIDEO_LINKS.map((videoLink, index) => (
            <li key={index}>
              <VideoItem src={videoLink} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
