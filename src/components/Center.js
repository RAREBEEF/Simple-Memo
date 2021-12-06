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
      <div className={classNames(styles["not-found"])}>404 Not Found. </div>
      <BrowserRouter>
        <Routes>
          <Route path="/memo/:id" element={<MemoView vh={vh} />}></Route>
          <Route path="/input/:id" element={<TextInput />}></Route>
          <Route path="/input/" exact element={<TextInput vh={vh} />}></Route>
          <Route path="/" exact element={<MemoList vh={vh} />}></Route>
          <Route element={<ErrorFilter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
