import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/reset.css";
import "@/styles/globals.css";
import { Layout } from "@/components/Layout/Layout";
import { MotionConfig } from "framer-motion";

export const metadata: Metadata = {
  title: "Daria Artemova",
  description: "Daria Artemova personal website",
  keywords: [
    "portfolio",
    "resume",
    "CV",
    "Daria Artemova",
    "front-end",
    "web",
    "developer",
    "software",
    "engineer",
  ],
  metadataBase: new URL("https://www.airadavometra.space/"),
  openGraph: {
    locale: "en_US",
    type: "website",
    url: new URL("https://www.airadavometra.space/"),
    title: "Daria Artemova",
    description: "Daria Artemova personal website",
    siteName: "Daria Artemova personal website",
    images: [
      {
        url: "/share.png",
      },
    ],
  },
  verification: {
    google: "nmUxJgg7N1_FUnmUtjXTZusnNnP203M8DcAbm-u1cCs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MotionConfig reducedMotion="user">
          <Layout>{children}</Layout>
        </MotionConfig>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
