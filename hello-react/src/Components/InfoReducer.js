import { useReducer } from 'react'

/**
 * 리듀서를 이용해 컴포넌트 외부로 빼낸 업데이트 로직 함수
 * @param {*} state : 현재 상태. input DOM 요소 각각의 값
 * @param {*} action : 액션값. input DOM 요소
 * @returns 
 */
function reducer(state, action) {    
    return {
        ...state,
        [action.name] : action.value //변경되는 상태. [e.target.name] = e.target.value
    };
}

/**
 * Reducer : '현재 상태', '업데이트에 필요한 정보'를 담은 액션값을 전달받아 새로운 상태를 반환하는 함수.
 *           [ state: 현재 상태, dispatch: 액션을 발생시키는 함수 ] = useReducer(리듀서함수, 리듀서 기본값);
 *           dispatch(action) 형태로 함수 안에 파라미터로 액션값을 넣어주면 리듀서 함수가 호출되는 구조
 */

const InfoReducer = () => {
    const [ state, dispatch ] = useReducer(reducer, { name: '', nickname: ''});
    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChange} />
                <input name='nickname' value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    )
};

export default InfoReducer;