import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  const onsubmit = (e) => {
    e.preventDefault();

    if (!number.trim()) {
      return alert("숫자를 입력하세요");
    }
  };
  const addNumber = () => {
    setNumber((prev) => prev);
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <form onsubmit={onsubmit}>
          <input
            type="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />{" "}
          만큼을
          <div>
            <button onClick={addNumber}>더할게요</button>{" "}
            <button onClick>뺄게요</button>
            <button onClick>초기화</button>
          </div>
        </form>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{number}</p>
      </div>
    </div>
  );
}
