import classNames from "classnames";
import { useParams } from "react-router";
import styles from "./MemoView.module.scss";
import Toolbar from "./Toolbar";
// import MemoList from "./MemoList";

export default function MemoView(props) {
  const id = useParams().id;
  // if (!JSON.parse(localStorage.getItem(id))) {
  //   return (
  //     <div>
  //       <MemoList />
  //     </div>
  //   );
  // } else {
  return (
    <div className={classNames(styles["container"])}>
      <Toolbar />
      <div className={classNames(styles["section-text"])}>
        <div className={classNames(styles["memo--header"])}>
          <h2 className={classNames(styles["title"])}>
            {JSON.parse(localStorage.getItem(id)).title}
          </h2>
          <div className={classNames(styles["time"])}>
            {JSON.parse(localStorage.getItem(id)).time}
          </div>
        </div>
        <div className={classNames(styles["memo--main-text"])}>
          {JSON.parse(localStorage.getItem(id)).memo}
        </div>
      </div>
    </div>
  );
}
// }
