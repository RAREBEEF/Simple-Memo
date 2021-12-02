import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <div className={styles["container"]}>
      <div className={styles["copyright"]}>
        © 2021. RAREBEEF All Rights Reserved.
      </div>
      <div className={styles["guide"]}>
        <span>When accessing with iPhone's private browsing, </span>
        <span>the memo disappears when the tab is closed.</span>
      </div>
    </div>
  );
}
