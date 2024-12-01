import "./App.css";
import { useState, useEffect, useRef } from "react";

import Viewer from "./assets/components/Viewer";
import Controller from "./assets/components/Controller";
import Even from "./assets/components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMounted = useRef(false);

  // 1. 마운트: 탄생
  useEffect(() => {
    console.log("Mount");
  }, []);

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    console.log("Update");
  });

  // 3. 언마운트: 죽음
  // Even 컴포넌트 참고

  useEffect(() => {
    console.log(`count: ${count}, input: ${input}`);
  }, [count, input]);
  // 두번째 매개변수: 의존성 배열(dependency array, deps)

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
