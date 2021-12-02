import styles from "./Header.module.scss";
import classNames from "classnames";
export default function Header() {
  return (
    <div className={classNames(styles["container"])}>
      <h1 className={classNames(styles["title"])}>Simple Memo</h1>
    </div>
  );
}
