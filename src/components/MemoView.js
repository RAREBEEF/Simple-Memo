import classNames from "classnames";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import styles from "./MemoView.module.scss";
import Toolbar from "./Toolbar";

export default function MemoView({ vh }) {
  const id = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem(id));
    if (!localStorage.getItem(id)) {
      navigate("/");
    }
  }, [id, navigate]);

  return (
    <div
      className={classNames(styles["container"])}
      style={{ height: "calc(var(--vh, 1vh) * 70)" }}
    >
      <Toolbar />
      <div
        className={classNames(styles["section-text"])}
        style={{ height: "calc(var(--vh, 1vh) * 50)" }}
      >
        <div className={classNames(styles["memo--header"])}>
          <h2 className={classNames(styles["title"])}>
            {JSON.parse(localStorage.getItem(id))?.title}
          </h2>
          <div className={classNames(styles["time"])}>
            {JSON.parse(localStorage.getItem(id))?.time}
          </div>
        </div>
        <div className={classNames(styles["memo--main-text"])}>
          {JSON.parse(localStorage.getItem(id))?.memo}
        </div>
      </div>
    </div>
  );
}
