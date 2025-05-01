import { useReducer } from 'react';

/**
 * 리듀서를 이용해 컴포넌트 외부로 빼낸 업데이트 로직 함수
 * @param {*} state : 현재 상태
 * @param {*} action : 액션값
 * @returns 
 */
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT' : return { value: state.value + 1 };
        case 'DECREMENT' : return { value: state.value - 1 };
        default: return state;
    }
}

/**
 * Reducer : '현재 상태', '업데이트에 필요한 정보'를 담은 액션값을 전달받아 새로운 상태를 반환하는 함수.
 *           [ state: 현재 상태, dispatch: 액션을 발생시키는 함수 ] = useReducer(리듀서함수, 리듀서 기본값);
 *           dispatch(action) 형태로 함수 안에 파라미터로 액션값을 넣어주면 리듀서 함수가 호출되는 구조
 */

const CounterReducer = () => {
    const [ state, dispatch ] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{ state.value }</b> 입니다.
            </p>
            <button onClick={ () => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={ () => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    )
};

export default CounterReducer;