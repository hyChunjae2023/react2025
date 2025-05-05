import { useState, useMemo, useCallback, useRef } from 'react';

/**
 * 평균값 계산 반환
 * input값을 입력할때도 getAverage 함수 호출 이슈 (렌더링할 때마다 함수 호출).
 *   => [ useMemo Hook ]을 사용해 렌더링하는 과정에서 특정값이 바뀌었을 때만 연산 실행하고 아닌 경우 이전에 연산했던 결과를 재사용 (특정값이 바뀔때만 함수 호출).
 *   => [ useCallback Hook ]을 사용해 렌더링시 함수가 새 함수를 만드는 방식을 특정 값이 바뀌면 새 함수를 만들고 아니면 기존 함수를 재사용하도록 하는 방식을 사용하여 최적화. 
 *   => [ useRef Hook ]을 사용해 컴포넌트에서 ref 사용. useRef 를 사용하여 ref를 생성하면 useRef를 통해 만든 객체의 current 값이 실제 엘리먼트를 가리킴.
 *                    (렌더링 상관없이 바뀔 수 있는 로컬 변수를 사용할 때도 useRef 사용: ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않음)
 * @param {*} numbers : 평균값 계산 대상
 * @returns : 평균값
 */
const getAverage = numbers => {
    //console.log('평균값 계산중...');
    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [ list, setList ] = useState([]);
    const [ number, setNumber ] = useState('');
    /** 
     * [ useRef Hook ]
     */
    const inputNumber = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);//useCallback 두번째 인자가 빈배열이면 처음 렌더링할 때만 함수 생성
    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputNumber.current.focus();//useRef Hook
    }, [number, list]);//useCallback 두번째 인자의 배열안의 각 값이 바뀔때 새 함수 생성. 함수 내부에서 상태값(number, list)을 의존해야 할 때는 그 값을 반드시 두번째 파라미터에 포함 필수.

    /**
     * [ useMemo Hook ]
     * list 값이 바뀔때(onInsert)만 getAverage 함수 호출하고 input 값을 입력하는 시점(onChange)에는 getAverage 함수 호출하지 않고 이전 계산된 avg 사용
    */
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputNumber} />{/** useRef Hook */}
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값: </b>{avg}{/*useMemo Hook 사용전 input 값 입력시에도 getAverage 함수 호출 이슈: getAverage(list)*/}
            </div>
        </div>
    )
};

export default Average;