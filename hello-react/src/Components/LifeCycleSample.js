import { Component } from "react";

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null;// ref 설정
    
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    /** props 로 받아 온 값을 state 에 동기화 시키는 시점 */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps', nextProps, prevState);
        if (nextProps.color !== prevState.color) {// 변경이 있으면 동기화
            return { color: nextProps.color };
        }
        return null;// state 변경 없으면 null 반환
    }

    /** 렌더링 후 실행. 다른 자바스크립트 또는 프레임워크 함수 호출, 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업 처리 가능 시점 */
    componentDidMount() {
        console.log('componentDidMount');
    }

    /** props 또는 state 변경시 렌더링 시작할지 여부 지정. 기반값을 true이며 false 반환시 렌더링 중단 */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;//10으로 나눈 나머지가 4이면 렌더링 중지.
    }

    /** 컴포넌트를 DOM 에서 제거하는 시점. componentDidMount 에서 등록한 이벤트, 타이머, 직접 생성한 DOM 제거. */
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    /** render() 에서 만들어진 결과물이 브라우저에 실제 반영되기 직전 호출. 반환 값은 componentDidUpdate 라이프사이클 함수의 세번째 인자로 전달 */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`getSnapshotBeforeUpdate: ${prevProps.color} -> ${this.props.color}`, prevProps, prevState);
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    /** 
     * 렌더링 완료 후 실행. DOM 관련 처리 가능. 
     * @param {any} prevProps 컴포넌트가 업데이트 전에 가졌던 props
     * @param {any} prevState 컴포넌트가 업데이트 전에 가졌던 state
     * @param {any} snapshot getShapshotBeforeUpdate() 반환값
    */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log(`업데이트 직전 색상: ${snapshot}`);
        }
    }

    handleClick= () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        const style = {
            color: this.props.color
        };

        console.log('render', style);

        return (
            <div>
                {/** 에러 강제 발생: this.props.missing.value*/}
                <h1 style= { style } ref={ ref => this.myRef=ref}>{this.state.number}</h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>++</button>
            </div>
        )
    }
}

export default LifeCycleSample;