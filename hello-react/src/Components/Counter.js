import { Component } from 'react';

class Counter extends Component {
    /** 클래스형 컴포넌트에서 constructor()에서 반드시 super(props) 호출 */
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            fixednumber: 0
        }
    }
    render() {
        const { number, fixednumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>{fixednumber}</h2>
                {/** setState({ ... }): 인자로 전달된 객체 안의 값만 변경, 여러번 호출해도 state 값이 바로 바뀌지 않아 한번만 적용 */}
                {/*<button onClick={() => {this.setState({ number: number + 1}); this.setState({ number: this.state.number + 1}); }}>+1</button>*/}
                {/**화살표 함수를 사용하면 바로 객체를 반환하도록 하므로 변경된 state 값을 바로 사용하므로 setState 여러번 호출시 변경된 state 값 적용 가능 */}
                <button onClick={() => {
                    // 화살표 함수에서 객체 바로 반환
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1 // +1
                        }
                    }
                    , () => {
                        // setState 함수의 state 업데이트후 특정 처리
                        console.log(this.state);
                        }
                    );            
                    // 화살표 함수에서 객체 바로 반환
                    this.setState(prevState => ({
                        number: prevState.number + 1 // +1
                    }), () => console.log(this.state));
                }}>+2</button>
            </div>
        )
    }
}

export default Counter;