import { useState } from 'react';

const EventPracticeFunc = () => {
    /** state 에 문자열 데이터 */
    //const [ userName, setUserName ] = useState("");
    //const [ message, setMessage ] = useState("");
    //const onChangeUserName = e => setUserName(e.target.value);
    //const onChangeMessage = e => setMessage(e.target.value);
    //const onClick = () => {
    //    setUserName("");
    //    setMessage("");
    //};

    /** state 에 객체 데이터 :
    //   ㄴ e.target.name 을 활용하려면 state 객체 데이터의 속성값을 e.target.name 을 사용 */
    const [ form, setForm ] = useState({
        userName: "",
        message: ""
    });
    const { userName, message } = form;//getter
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        setForm({
            userName: "",
            message: ""
        });
    };


    const onKeyUp = e => (e.key === "Enter") ? onClick() : null;

    return(
        <div>
            <h1>이벤트 연습</h1>
            <input 
                type="text"
                name="userName"
                placeholder='사용자명'
                value={userName}
                //onChange={onChangeUserName}
                onChange={onChange}
                onKeyUp={onKeyUp}
            />
            <input 
                type="text"
                name="message"
                placeholder="내용"
                value={message}
                //onChange={onChangeMessage}
                onChange={onChange}
                onKeyUp={onKeyUp}
            />
            <button 
                onClick={onClick}
            >확인</button>
        </div>
    )
}

export default EventPracticeFunc;