import { useState } from 'react';

/** Hooks : 함수형 컴포넌트에서 state, lifecycle 기능을 연동할수 있게 해주는 함수 */
/** props : 부모 컴포넌트가 설정하고 자식은 읽기만 가능(단, 자식 컴포넌트에서 특정 이벤트 발생시 부모 컴포넌트의 메시지 호출하여 props 변경 가능) */
/** state : 컴포넌트 자체 데이터로 컴포넌트 내부에서 업데이트 가능 */
/** v16.8 이후 함수 컴포넌트에서 useState 함수통해 state 사용 가능 */
/** useState('초깃값') : 배열의 첫번째 요소-현재상태, 배열의 두번째 오소-상태변경함수 */
/** state 의 배열이나 객체 업데이트시, 사본을 만들어 사본의 값을 업데이트한 후, 그 사본의 상태를 세터 함수를 통해 업데이트트  */
const Say = () => {
    const [ message, setMessage ] = useState('');
    const [ color, setColor ] = useState('black');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={() => setColor('red')}>빨간색</button>
            <button style={{color: 'green'}} onClick={() => setColor('green')}>초록색</button>
            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>파란색</button>            
        </div>
    )
}

export default Say;