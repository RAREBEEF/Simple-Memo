import styles from "./Center.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classNames from "classnames";
import TextInput from "./TextInput";
import MemoList from "./MemoList";
import MemoView from "./MemoView";
import ErrorFilter from "./ErrorFilter";
export default function Center({ vh }) {
  return (
    <div
      className={classNames(styles["container"])}
      style={{ height: "calc(var(--vh, 1vh) * 70)" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<MemoView vh={vh} />}></Route>
          <Route path="/edit/:id" element={<TextInput />}></Route>
          <Route path="/input/" exact element={<TextInput vh={vh} />}></Route>
          <Route path="/" exact element={<MemoList vh={vh} />}></Route>
          <Route element={<ErrorFilter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
