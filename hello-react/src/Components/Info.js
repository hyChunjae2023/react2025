import { useState, useEffect } from 'react';

/** 함수형 컴포넌트에서 상태관리(useState Hook)와 렌더링시 특정작업수행(useEffect Hook) */
const Info = () => {
    const [ name, setName ] = useState('');
    const [ nickname, setNickname ] = useState('');
    /** useEffect() : 
     * 리액트 컴포넌트가 랜더링될 때마다 특정 작업을 수행하도록 설정. 개발환경에서만 두 번 호출되며, 운영에서는 한번 호출됨. 
     * 처음 랜더링될 때만 실행하고 업데이트시에는 실행하지 않으려면 두번째 함수에 빈 배열 설정(useEffect(() => { ... }, [])).
     * 특정 값이 변경될때만 실행하려면 두번째 함수의 배열에 해당 특정 값(의존하는 값) 설정(useEffect(() => { ... }, [name])).
     * 리액트 컴포넌트가 언마운트 전이나 업데이트 직전에 특정 작업을 수행하도록 하려면 특정 작업을 수행하는 뒷정리 함수 반환(useEffect(() => { ... return () => { ... } })).
     * 언마운트될 때만 뒷정리 함수를 수행하고 싶으면 두번째 함수에 빈 배열 설정(useEffect(() => { ... return () => { ... } }, [])).
     * */
    useEffect(() => {
        console.log('랜더링 완료', name, nickname);
        /**
         * 뒷정리 함수 (언마운트 전 또는 업데이트 직전 수행되는 특정 작업)
        return () => {
            console.log('뒷정리...');
        }*/
    }
    /*, []*/ 
    /*, [name]*/
    );
    const onChangeName = e => setName(e.target.value);
    const onChangeNickname = e => setNickname(e.target.value);

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름: </b>{name}
            </div>
            <div>
                <b>닉네임: </b>{nickname}
            </div>
        </div>
    )
}

export default Info;