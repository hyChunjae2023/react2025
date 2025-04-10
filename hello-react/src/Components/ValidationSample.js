import { Component } from "react";
import '../css/ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: "",
        clicked: false,
        validated: false
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === "0000"
        })
    }

    handleKeyUp = (e) => {
        if (e.key === "Enter") this.handleClick();
    }

    render() {
        return (
            <div>
                <input 
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationSample;