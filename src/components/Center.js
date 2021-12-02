import styles from "./Center.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classNames from "classnames";
import TextInput from "./TextInput";
import MemoList from "./MemoList";
import MemoView from "./MemoView";
export default function Center() {
  return (
    <div className={classNames(styles["container"])}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MemoList />}></Route>
          <Route path="/input/" exact element={<TextInput />}></Route>
          <Route path="/input/:id" element={<TextInput />}></Route>
          <Route path="/memo/:id" element={<MemoView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
