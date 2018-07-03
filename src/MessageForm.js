import React, {Component} from 'react'

class MessageForm extends Component {
    render() {
        return (
            <form className = "MessageForm">
                <input
                    type="text"
                    name="body"
                    placeholder = "Type a message"
                    autoFocus
                    required>
                </input>
                <button type = "Submit">
                Send
                </button>
            </form>
        )
    }
}

export default MessageForm
