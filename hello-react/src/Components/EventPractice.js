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
        /** 동일한 처리를 하는 DOM 요소의 이벤트 처리 */
        this.handleInputEvent = this.handleInputEvent.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
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
    
    /** 동일한 처리를 하는 DOM 요소의 이벤트 처리 */
    handleInputEvent(e) {
        const value = (e.type === "change") ? e.target.value || "" : ""; 
        let targetName;
        switch (e.target.name) {
            case "btnUserName":
            case "userName": 
                targetName = "userName";
                break;
            case "btnTel":
            case "tel": 
                targetName = "tel";
                break;
            default: break;
        }
        /** 객체 안에서 key 룰 [] 로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제값이 키로 사용됨 */
        if (targetName) {
            this.setState({
                [targetName]: value
            });
        }
    }
    /** onKeyPress 이벤트는 deprecated 되었으므로 onKeyUp/onKeyDown 으로 대체 */
    handleKeyPress = (e) => {
        console.log(e.type, e.target.name);
        if (e.key === "Enter") this.handleInputEvent(e);
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <h4>내용: { this.state.message }</h4>
                <h4>작성자명: { this.state.userName }</h4>
                <h4>연락처: { this.state.tel }</h4>
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
                <hr />
                {/** 함수 형태의 객체를 전달 */}
                <input 
                    type="text" 
                    name="userName"
                    placeholder="이름을 입력하세요..."
                    value={this.state.userName}
                    //onChange={this.handleChangeUserName}
                    onChange={this.handleInputEvent}
                    //[deprecated] onKeyPress={this.handleKeyPress}
                    onKeyUp={this.handleKeyPress}
                />
                <button 
                    //onClick={this.handleClearUserName}
                    name="btnUserName"
                    onClick={this.handleInputEvent}
                >확인</button>
                <hr />
                {/** Property Initializer Syntax 사용 메서드 작성 */}
                <input 
                    type="text"
                    name="tel"
                    placeholder="연락처를 입력하세요..."
                    value={this.state.tel}
                    //onChange={this.handleChangeTel}
                    onChange={this.handleInputEvent}
                    //[deprecated] onKeyPress={this.handleKeyPress}
                    onKeyUp={this.handleKeyPress}
                />
                <button 
                    //onClick={this.handleClearTel}
                    name="btnTel"
                    onClick={this.handleInputEvent}
                >확인</button>
            </div>
        )
    }
}

export default EventPractice;