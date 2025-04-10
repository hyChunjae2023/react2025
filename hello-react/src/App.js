import './App.css';
import { Component, createRef } from 'react';
import ScrollBox from './Components/ScrollBox';

class App extends Component {
  scrollBox = createRef();
  render() {
    return (
      <div>
        {/** 컴포넌트에 ref 를 설정하여 컴포넌트 내부의 DOM 요소 직접 제어 */}
        <ScrollBox ref={(ref) => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 아래로</button>
        <button onClick={() => this.scrollBox.scrollToTop()}>맨 위로</button>
      </div>
    )
  }  
}

/*
const App = () => {
  return (
    <div>
    </div>
  )
}
*/
export default App;
