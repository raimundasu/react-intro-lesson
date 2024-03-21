import Button from "./components/Button";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => setCount(count - 1);

  return (
    <div className="container">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="avatar"
        className="avatar"
      />
      <h1>Welcome to react!</h1>
      <Button text="Add" onClicking={handleAdd} />
      <Button text="Subtract" onClicking={handleSubtract} />
      <input
        value={count}
        style={{
          width: "290px",
          height: "60px",
          background: "bisque",
          border: "2px solid black",
          borderRadius: "5px",
          fontSize: "30px",
          textAlign: "center",
        }}
      />
    </div>
  );
}

export default App;
