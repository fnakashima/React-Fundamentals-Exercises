import { useState } from "react";
import PropTypes from "prop-types";
import UserInfo from "./UserInfo";

const UserList = ({users}) => {
    const [showGamesPlayed, setShowGamesPlayed] = useState(true);

    const toggleShowGamesPlayed = () => {
        setShowGamesPlayed(!showGamesPlayed);
    };
    const getToggleGamesPlayedText = () => {
        return showGamesPlayed
            ? "Hide the Number of Games Played"
            : "Show the Number of Games Played";
    };
    return (
        <div className="UserList">
          <h2>Users</h2>
          <ul>
            {
              users.map((user, index) => (
                <UserInfo key={index} user={user} showGamesPlayed={showGamesPlayed} />
              ))
            }
          </ul>
          <button onClick={toggleShowGamesPlayed}>{getToggleGamesPlayedText()}</button>
        </div>
    )
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;