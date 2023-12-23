import { useState } from "react";
import "./app.scss";
import { sendMessage } from "../../utils/sendMessage";

function App() {
  const [message, setMessage] = useState<string>("");

  return (
    <div className="container">
      <h1>Personal teacher</h1>
      <button>test</button>
    </div>
  );
}

export default App;
