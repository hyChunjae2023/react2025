import { Component } from "react";

/** React 이벤트명 : 카멜 표기법 사용 */
/** React 이벤트 : 자바스크립트가 아닌 함수 형태의 객체 전달 */
/** React 이벤트 설정 : DOM 요소에만 이벤트 설정 가능(사용자정의 컴포넌트에는 이벤트 설정 불가. 사용자정의 컴포넌트는 props를 통해 이벤트를 전달하고 전달받은 이벤트를 컴포넌트 내부의 DOM 요소의 이벤트로 설정.) */

class EventPractice extends Component {
    state = {
        message: "",
        userName: "",
        tel: ""
    }

    constructor(props) {
        super(props);
        /** 클래스의 임의 메서드가 특정 HTML 요서의 이벤트로 등록되는 과정에서 메서드와 this 의 관계가 끊어지므로 이벤트 등록후에도 this가 컴포넌트 자신을 가리키도록 메서드와 this 바인딩 필요 */
        /** 함수 형태의 객체를 전달 */
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleClearUserName = this.handleClearUserName.bind(this);
        /** Property Initializer Syntax 사용 메서드 작성 */
        this.handleChangeTel = this.handleChangeTel.bind(this);
        this.handleClearTel = this.handleClearTel.bind(this);
    }

    /** 함수 형태의 객체를 전달 */
    handleChangeUserName(e) {
        this.setState({
            userName: e.target.value
        });
    }

    handleClearUserName() {
        this.setState({
            userName: ""
        });
    }

    /** Property Initializer Syntax 사용 메서드 작성 */
    handleChangeTel(e) {
        this.setState({
            tel: e.target.value
        });
    }

    handleClearTel() {
        this.setState({
            tel: ""
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                {/** 이벤트 렌더링시에 함수를 만들어 전달 */}
                <input 
                    type="text"
                    name="message"
                    placeholder="입력하세요..."
                    value={this.state.message}
                    onChange={
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
                <button onClick={
                    () => {
                        this.setState({
                            message: ""
                        })
                    }
                }>확인</button>
                {/** 함수 형태의 객체를 전달 */}
                <input 
                    type="text" 
                    name="userName"
                    placeholder="이름을 입력하세요..."
                    value={this.state.userName}
                    onChange={this.handleChangeUserName}
                />
                <button onClick={this.handleClearUserName}>확인</button>
                {/** Property Initializer Syntax 사용 메서드 작성 */}
                <input 
                    type="text"
                    name="tel"
                    placeholder="연락처를 입력하세요..."
                    value={this.state.tel}
                    onChange={this.handleChangeTel}
                />
                <button onClick={this.handleClearTel}>확인</button>
            </div>
        )
    }
}

export default EventPractice;