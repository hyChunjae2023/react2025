import { useState, useMemo } from 'react';

/**
 * 평균값 계산 반환
 * input값을 입력할때도 getAverage 함수 호출 이슈 (렌더링할 때마다 함수 호출)
 *   => [ useMemo Hook ]을 사용해 렌더링하는 과정에서 특정값이 바뀌었을 때만 연산 실행하고 아닌 경우 이전에 연산했던 결과를 재사용 (특정값이 바뀔때만 함수 호출)
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

    const onChange = e => {
        setNumber(e.target.value);
    };
    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    /**
     * [ useMemo Hook ]
     * list 값이 바뀔때(onInsert)만 getAverage 함수 호출하고 input 값을 입력하는 시점(onChange)에는 getAverage 함수 호출하지 않고 이전 계산된 avg 사용
    */
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} />
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