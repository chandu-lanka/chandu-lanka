import React, { useState, useEffect } from "react";
import "./styles.css";
import {
  Button,
  Input,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Typography
} from "@material-ui/core";
import Message from "./Message";

export default function App() {
  const [isTyping, setIsTyping] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your name for the live chat"));
  }, []);

  const SendMessages = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: isTyping }]);
    setIsTyping("");
  };

  return (
    <div className="App">
      <h1>FaceBook Messenger Clone</h1>
      <h2>welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Send A Message..</InputLabel>
          <Input
            value={isTyping}
            onChange={(event) => setIsTyping(event.target.value)}
          />

          <Button
            disabled={!isTyping}
            variant="contained"
            color="primary"
            onClick={SendMessages}
            type="submit"
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      {messages.map((messages) => (
        <div className="MessageContainer">
          <h2>
            {messages.username}: {messages.text}
          </h2>
        </div>
      ))}
    </div>
  );
}
