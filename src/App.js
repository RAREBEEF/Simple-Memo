import React from "react";
import styles from "./App.module.scss";
import classNames from "classnames";
import Center from "./components/Center";
import Footer from "./components/Footer";
import Header from "./components/Header";
import useVh from "./Hooks/useVh";

export default function App() {
  const vh = useVh();
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  return (
    <div className={classNames(styles["container"])}>
      <Header vh={vh} />
      <Center vh={vh} />
      <Footer vh={vh} />
    </div>
  );
}
