import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [list1, setList1] = useState([
    { title: "one", checked: false },
    { title: "two", checked: false },
    { title: "three", checked: false },
    { title: "four", checked: false },
    { title: "five", checked: false },
  ]);

  const [list2, setList2] = useState([
    { title: "A", checked: false },
    { title: "B", checked: false },
    { title: "C", checked: false },
    { title: "D", checked: false },
    { title: "E", checked: false },
  ]);

  const handleCheck = (idx) => {
    const updatedList1 = [...list1];
    updatedList1[idx].checked = !updatedList1[idx].checked;
    setList1(updatedList1);
  };

  const handleSwap = () => {
    const updatedList1 = [...list1];
    const updatedList2 = [...list2];

    updatedList1.forEach((item, idx) => {
      if (item.checked) {
        const temp = updatedList1[idx].title;
        updatedList1[idx].title = updatedList2[idx].title;
        updatedList2[idx].title = temp;
        updatedList1[idx].checked = false; // Uncheck after swapping
      }
    });

    setList1(updatedList1);
    setList2(updatedList2);
  };

  return (
    <>
      <p>List ONE</p>
      <ul>
        {list1.map((item, idx) => (
          <li key={idx}>
            <input
              type="radio"
              checked={item.checked}
              onChange={() => handleCheck(idx)}
            />
            {item.title}
          </li>
        ))}
      </ul>
      <p>LIST TWO</p>
      <ul>
        {list2.map((item, idx) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>

      <div>
        <button onClick={handleSwap}>Swap List Data</button>
      </div>
    </>
  );
}

export default App;
