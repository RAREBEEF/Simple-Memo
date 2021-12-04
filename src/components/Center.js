import styles from "./Center.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classNames from "classnames";
import TextInput from "./TextInput";
import MemoList from "./MemoList";
import MemoView from "./MemoView";
import ErrorFilter from "./ErrorFilter";
export default function Center() {
  return (
    <div className={classNames(styles["container"])}>
      <div className={classNames(styles["not-found"])}>404 Not Found. </div>
      <BrowserRouter>
        <Routes>
          <Route path="/memo/:id" element={<MemoView />}></Route>
          <Route path="/input/:id" element={<TextInput />}></Route>
          <Route path="/input/" exact element={<TextInput />}></Route>
          <Route path="/" exact element={<MemoList />}></Route>
          <Route element={<ErrorFilter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
