import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const sendMessage = async (
  message: string,
  setMessage: Dispatch<SetStateAction<string>>
) => {
  const apiKey = `${import.meta.env.VITE_OPENAI_API_KEY}`;
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  try {
    const response = await axios.post(
      apiUrl,
      {
        messages: [
          {
            role: "system",
            content:
              "You are an English teacher we are going to discuss together, you will have to correct me if I make any language mistakes, you'll have to respond to me with 1 message at a time in JSON.",
          },
          { role: "user", content: message },
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
    const dataParsed = JSON.parse(response.data.choices[0].message.content);
    setMessage(dataParsed.message);

    // setMessage(dataParsed);
  } catch (error) {
    console.log(error, "error");
  }
};
