import PropTypes from "prop-types";
import { useState } from "react";

const AddUser = ({users, addNewUser}) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        gamesPlayed: 0
    });
    const checkIfUserExists = (username) => {
        return users.some(user => user.userName === username);
    };
    const isAddButtonDisabled = () => {
        return user.firstName === "" || user.lastName === "" || user.userName === "";
    };
    const clearFields = () => {
        setUser({
            firstName: "",
            lastName: "",
            userName: "",
            gamesPlayed: 0
        });
    };
    const handelAddUser = (event) => {
    event.preventDefault();
    console.log("Adding user: ", user);
    if(isAddButtonDisabled()){
        alert("Please fill in all fields");
        return;
    };
    if(checkIfUserExists(user.userName)){
        alert("User already exists");
        return;
    };

    addNewUser(user);
    clearFields();
    };

    const changeInput = (event) => {
        const updatedUser = {...user};
        const {name, value} = event.target;
        updatedUser[name] = value;
        setUser(updatedUser);
    }


    return (
        <div className="AddUser">
        <h2>Add User</h2>
        <form onSubmit={handelAddUser}>
          <input type="text" placeholder="Enter First Name" name="firstName" value={user.firstName} onChange={changeInput}/><br/>
          <input type="text" placeholder="Enter Last Name" name="lastName" value={user.lastName} onChange={changeInput}/><br/>
          <input type="text" placeholder="Enter Username"name="userName" value={user.userName} onChange={changeInput}/><br/>
          <button disabled={isAddButtonDisabled()}>Add</button>
        </form>
        </div>
    );
}

AddUser.propTypes = {
    users: PropTypes.array.isRequired,
    addNewUser: PropTypes.func.isRequired
}

export default AddUser;