import PropTypes from "prop-types";

const UserInfo = ( {key, user, showGamesPlayed} ) => {
    console.log("key", key);
    console.log("user", user);
    console.log("showGamesPlayed", showGamesPlayed);
    const getGamePlayCount = () => {
        return showGamesPlayed ? user.gamesPlayed : "*";
    };
    return (
        <li key={key}>{`${user.userName} played ${getGamePlayCount()} games.`}</li>
    )
}

UserInfo.propTypes = {
    key: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    showGamesPlayed: PropTypes.bool.isRequired
}

export default UserInfo;