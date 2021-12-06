import styles from "./Header.module.scss";
import classNames from "classnames";
export default function Header({ vh }) {
  return (
    <div
      className={classNames(styles["container"])}
      style={{ height: "calc(var(--vh, 1vh) * 15)" }}
    >
      <h1 className={classNames(styles["title"])}>Simple Memo</h1>
    </div>
  );
}
