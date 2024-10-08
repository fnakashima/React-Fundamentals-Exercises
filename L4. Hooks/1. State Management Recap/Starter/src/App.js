import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChatWindow from "./ChatWindow";

const users = [{ username: "Amy" }, { username: "John" }];


const App = () => {

  const [messages, setMessages] = useState([
    { username: "Amy", text: "Hi, Jon!" },
    { username: "Amy", text: "How are you?" },
    { username: "John", text: "Hi, Amy! Good, you?" },
  ]);

  const sendMessage = (senderName, text) =>{
    //console.log("sendMessage: ", senderName, text);
    const newMessage = { username: senderName, text: text };
    setMessages(prevMessages => [...prevMessages, newMessage]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {
          users.map((user) => {
            return <ChatWindow user={user} messages={messages} onSend={sendMessage} />
         })
        }
      </div>
    </div>
  );
};

export default App;
