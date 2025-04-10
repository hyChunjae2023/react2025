import { Component, createRef } from "react";
import '../css/ValidationSample.css';

class ValidationSample extends Component {
    /** state 로 DOM 요소 직접 제어 */
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
        });
        this.handleFocus();
    }

    handleKeyUp = (e) => {
        if (e.key === "Enter") this.handleClick();
    }

    /** ref 로 DOM 요소 직접 제어 
     *  ref설정변수 = createRef() 로 ref 설정후 
     *    ㄴ DOM 요소에 ref props로 넣어주고 DOM 에 접근시 this.[ref설정변수].current 로 조회
     *    ㄴ DOM 요소에 콜백함수로 설정
    */
    userName = createRef();
    nickName = createRef();
    handleFocus = () => {
        this.userName.current.focus();
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
                {/** DOM 요소에 ref props 설정 */}
                <input ref={this.userName}  />

                {/** DOM 요소에 콜백함수로 ref 설정 */}
                <input ref={(ref) => this.nickName = ref} />
            </div>
        )
    }
}

export default ValidationSample;