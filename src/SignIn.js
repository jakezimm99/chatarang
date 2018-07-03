import React, {Component} from 'react'

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            uid : '',
            displayName : '',
            email : '',
            loggedIn : false,
        }
    }

    handleSignIn = (ev) => {
        ev.preventDefault()
        this.setState({loggedIn : true})

        
    } 

    handleChange = (ev) => {
        ev.preventDefault()
        this.setState({[ev.target.name] : ev.target.value})
    }

    render() {
        if(!this.state.loggedIn)
        return (
            <form>
                <input
                type= "text"
                placeholder = "Email Address"
                value = {this.state.email}
                onChange = {this.handleChange}
                name = "email"
                autoFocus>
                </input>
                <input type = "text"
                placeholder = "DisplayName"
                value = {this.state.displayName}
                onChange = {this.handleChange}
                name = "displayName">
                </input>
                <input type = "text"
                placeholder = "UserId"
                value = {this.state.uid}
                onChange = {this.handleChange}
                name = "uid">
                </input>
                <input type = "Submit"
                onSubmit = {this.handleSignIn}>
                </input>
            </form>
        )
    }
}

export default SignIn