import { ReactNode } from "react";
import s from "./Layout.module.css";
import { Header } from "../Header/Header";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div id="layout" className={s.layout}>
        <Header />
        <main className={s.main}>{children}</main>
      </div>
    </>
  );
};
