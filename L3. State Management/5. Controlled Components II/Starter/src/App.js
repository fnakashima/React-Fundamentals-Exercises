import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ItemList from "./ItemList";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";

const App = () => {
  const [items, setItems] = useState([]);

  const addNewItem = (item) => {
    setItems([...items, item]);
  };

  const deleteLastItem = (event) => {
    console.log("deleteLastItem was called");
    setItems(items.slice(0, -1));
  };

  const noItemsFound = () => {
    console.log("noItemsFound was called: " + items.length);
    return items.length === 0;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <AddItem addNewItem={addNewItem}/>

      <DeleteItem deleteLastItem={deleteLastItem} noItemsFound={noItemsFound} />

      <ItemList items={items} />
    </div>
  );
};

export default App;
