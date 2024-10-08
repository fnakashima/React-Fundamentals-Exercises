import PropTypes from "prop-types";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

const ChatWindow = ({user, messages, onSend}) => {
    const sendHandler = (message) => {
        //console.log("sendHandler: ", user.username, message);
        onSend(user.username, message);
    };
    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

            <MessageList user={user} messages={messages} />
            <SendMessage onSend={sendHandler} />
        </div>
    )

};

ChatWindow.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    onSend: PropTypes.func.isRequired
}

export default ChatWindow;