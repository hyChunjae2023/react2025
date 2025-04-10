import { useState } from 'react';

const EventPracticeFunc = () => {
    const [ userName, setUserName ] = useState("");
    const [ message, setMessage ] = useState("");
    const onChangeUserName = e => setUserName(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        setUserName("");
        setMessage("");
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
                onChange={onChangeUserName}
                onKeyUp={onKeyUp}
            />
            <input 
                type="text"
                name="message"
                placeholder="내용"
                value={message}
                onChange={onChangeMessage}
                onKeyUp={onKeyUp}
            />
            <button 
                onClick={onClick}
            >확인</button>
        </div>
    )
}

export default EventPracticeFunc;