import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <div
      className={styles["container"]}
      style={{ height: "calc(var(--vh, 1vh) * 15)" }}
    >
      <div
        className={styles["copyright"]}
        style={{ marginBottom: "calc(var(--vh, 1vh) * 1)" }}
      >
        © 2021. RAREBEEF All Rights Reserved.
      </div>
      <div className={styles["guide"]}>
        <span>When accessing with iPhone's private browsing, </span>
        <span>the memo disappears when the tab is closed.</span>
      </div>
    </div>
  );
}
