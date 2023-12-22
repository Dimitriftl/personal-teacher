import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const apiKey = `${import.meta.env.VITE_OPENAI_API_KEY}`; // Remplacez par votre clé API
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const sendMessage = async (message: string) => {
    try {
      const response = await axios.post(
        apiUrl,
        {
          messages: [
            {
              role: "system",
              content:
                "You are an english teacher, we're gonna talk together and you will corect my english if it is wrong in JSON.",
            },
            { role: "user", content: "hey, who are you?" },
          ],
          model: "gpt-3.5-turbo-1106",
          response_format: { type: "json_object" },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      console.log(response.data, "response");
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => sendMessage("how are you")}>send message</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
