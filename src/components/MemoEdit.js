import styles from "./MemoEdit.module.scss";
import classNames from "classnames";
import { useCallback, useState } from "react";
import gsap from "gsap";
import Toolbar from "./Toolbar";
import { useNavigate } from "react-router";

export default function TextInput() {
  // input value state 정의
  const [valueTitle, setValueTitle] = useState("");
  const [valueMemo, setValueMemo] = useState(``);

  // 값 입력시 state 업데이트
  const changeTitle = useCallback((e) => {
    setValueTitle(e.target.value);
  }, []);
  const changeMemo = useCallback((e) => {
    setValueMemo(e.target.value);
  }, []);

  // url 이동을 위한 navigate 준비
  const navigate = useNavigate();

  // 등록 버튼 클릭 시 빈칸을 진동으로 나타내고 빈칸이 없으면 내용을 스토리지에 업로드
  const upload = useCallback(() => {
    if (valueTitle.length === 0) {
      gsap.to("input", 0.05, {
        translateX: "3px",
        yoyo: true,
        repeat: 1,
      });
      gsap.to("input", 0.05, {
        delay: 0.1,
        translateX: "-3px",
        yoyo: true,
        repeat: 1,
      });
      gsap.to("input", 0.05, {
        delay: 0.2,
        translateX: "3px",
        yoyo: true,
        repeat: 1,
      });
    } else if (valueMemo.length === 0) {
      gsap.to("textarea", 0.05, {
        translateX: "3px",
        yoyo: true,
        repeat: 1,
      });
      gsap.to("textarea", 0.05, {
        delay: 0.1,
        translateX: "-3px",
        yoyo: true,
        repeat: 1,
      });
      gsap.to("textarea", 0.05, {
        delay: 0.2,
        translateX: "3px",
        yoyo: true,
        repeat: 1,
      });
    } else {
      let now = new Date();
      let key = now.toLocaleString();
      localStorage.setItem(
        key,
        JSON.stringify({
          time: key,
          title: valueTitle,
          memo: valueMemo,
          order: Date.parse(now),
        })
      );
      setValueTitle("");
      setValueMemo(``);
      navigate(`/memo/${key}`);
    }
  }, [navigate, valueMemo, valueTitle]);

  return (
    <div className={classNames(styles["container"])}>
      <Toolbar />
      <div className={classNames(styles["input-group"])}>
        <input
          className={classNames(styles["input--title"])}
          value={valueTitle}
          onChange={changeTitle}
          placeholder="제목"
        />
        <textarea
          className={classNames(styles["input--memo"])}
          value={valueMemo}
          onChange={changeMemo}
          placeholder="내용"
        />
        <div
          className={classNames(styles["btn--upload"], styles["btn"])}
          onClick={upload}
        >
          등록
        </div>
      </div>
    </div>
  );
}
