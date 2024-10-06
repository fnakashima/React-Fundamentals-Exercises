import { useState } from "react";
import PropTypes from "prop-types";

const AddItem = ({addNewItem}) => {
    const [value, setValue] = useState("");
    const inputIsEmpty = () => value === "";
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    
    const addItem = (event) => {
        event.preventDefault();
        addNewItem(value);
        setValue("");
      };
    
    return (
    <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
    </form>
    );
}

AddItem.propTypes = {
    addNewItem: PropTypes.func.isRequired
}

export default AddItem;