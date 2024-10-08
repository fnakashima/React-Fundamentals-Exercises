import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";

const App = () => {
  const userlist = [
    {
      id: 1,
      firstName: "Jane",
      lastName: "Cruz",
      userName: "coder",
      gamesPlayed: 5
    },
    {
      id: 2,
      firstName: "Matthew",
      lastName: "Johnson",
      userName: "mpage",
      gamesPlayed: 12
    },
    {
      id: 3,
      firstName: "Autumn",
      lastName: "Green",
      userName: "autumn",
      gamesPlayed: 8
    },
    {
      id: 4,
      firstName: "John",
      lastName: "Doe",
      userName: "john222",
      gamesPlayed: 30
    },
    {
      id: 5,
      firstName: "Lauren",
      lastName: "Carlson",
      userName: "lauren33",
      gamesPlayed: 51
    },
    {
      id: 6,
      firstName: "Nicholas",
      lastName: "Lain",
      userName: "nick33",
      gamesPlayed: 1
    },
  ];
  const [users, setUsers] = useState(userlist);

  const addNewUser = (user) => {
    console.log("Adding user: ", user);

    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="App-body">
        <UserList users={users}/>
        <AddUser users={users} addNewUser={addNewUser}/>
      </div>
    </div>
  );
};

export default App;
