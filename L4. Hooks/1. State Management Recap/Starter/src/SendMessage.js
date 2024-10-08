import PropTypes from "prop-types";
import { useState } from "react";

const SendMessage = ({onSend}) => {
    const [message, setMessage] = useState("");
    const onChangeText = (e) => {
        setMessage(e.target.value);
    }
    // If the user did not type anything, he/she should not be allowed to submit.
    const isDisabled = () => {
        return message.trim() === "";
    };
    const sendMessage = (e) => {
        e.preventDefault();
        //console.log("Sending a message: ", message);
        onSend(message);
        setMessage("");
    }
  
    return (
        <div>
          <form className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your message..."
              value={message}
              onChange={onChangeText}
            />
            <div className="input-group-append">
              <button className="btn submit-button" disabled={isDisabled()} onClick={sendMessage}>
                SEND
              </button>
            </div>
          </form>
        </div>
    )
}

SendMessage.propTypes = {
    onSend: PropTypes.func.isRequired
}

export default SendMessage;