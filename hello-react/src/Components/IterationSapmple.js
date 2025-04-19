import { useState } from "react";

const IterationSample = () => {
    /**
     * arr.map(callback(currentValue, [thisArgs])
     * 
     * map() : 배열 내 각 요소를 원하는 규칙에 따라 변환 후 그 결과를 새로운 배열로 생성하는 함수. 반복되는 컴포넌트 렌더링에 사용가능.
     *         key: 리액트에서 컴포넌트 배열을 렌더링했을 때 어떤 원소의 변동여부를 확인하기 위해 사용. 
     *              (index 를 key 로 사용하면 배열이 변경될 때 비효율적으로 렌더링 되므로 고유값이 없을 때만 사용 권장)
     * 
     * 불변성 유지: 리액트에서는 새로운 상태를 업데이트할 때 가존 상태를 그대로 두고 새로운 값을 설정하는 방법으로 불변성을 유지해 리엑트 컴포넌트 성능 최적화.
     * 
     * state 의 배열을 변경할 때는 배열을 직접 변경하는 것이 아니라, concat()이나 filter() 함수로 새로운 배열을 만든 후 새로운 배열을 state 의 배열로 설정해 주어야 함.
     * concat() : 불변성을 유지하면서 배열에 특정 항목을 추가(기존 배열로 새로운 배열을 생성).
     * filter() : 불변성을 유지하면서 배열의 특정 항목을 삭제(특정 조건을 만족하는 원소들만 추출).
     */
    //const names = [ "눈사람", "얼음", "눈", "바람" ];
    //const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    // 배열에 고유값 추가
    const [ names, setNames ] = useState([
        { id: 1, text: "눈사람" },
        { id: 2, text: "얼음" },
        { id: 3, text: "눈" },
        { id: 4, text: "바람" },
    ]);

    /** 배열 데이터 추가 기능 (concat) */
    const [ inputText, setInputText ] = useState('');
    const [ nextId, setNextId ] = useState(5);
    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const result = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(result);
        setInputText('');
    }
    const onKeyUp = (e) => {
        if (e.target.value.trim() !== '' && e.key === "Enter") onClick();
    }

    /** 배열 데이터 삭제 기능 (filter) */
    const onRemove = (id) => {
        const result = names.filter((item) => item.id !== id);
        setNames(result);
    }

    const nameList = names.map((item) => <li key={item.id} onDoubleClick={() => onRemove(item.id)}>{item.text}</li>);
    return (
        <div>
            <input value={inputText} onChange={onChange} onKeyUp={onKeyUp} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    )
}

export default IterationSample;