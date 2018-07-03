import React, {Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor() {
        super()
        this.state = {messages : [
            { id: 1, userName: 'jakezimm04', body: 'Talking up a storm'},
            {id: 2, userName: 'randomfan', body: 'This is a talking app!'}
        ]}
    }

    addMessage = () => {
        const messages = [...this.state.messages]
        const userName = 'daniel'

        messages.push({
            id: `${userName}-${Date.now}`,
            userName: userName,
            body: 'Sorry, randomfan, I love being a research intern'
        })
        this.setState({messages: messages})
    }

    render() {
        return(
            <div className = "chat">
                <ChatHeader />
                <MessageList  messages = {this.state.messages}/>
                <MessageForm addMessage = {this.addMessage}/>
            </div>
        )
    }
}

export default Chat