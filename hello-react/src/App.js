import './App.css';
import { Component, createRef } from 'react';
import LifeCycleSample from './Components/LifeCycleSample';
import ErrorBoundary from './Components/ErrorBoundary';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;//xffffff = 16777215
}
class App extends Component {
  scrollBox = createRef();
  state = {
    color: '#000000'
  }
  
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
        <button onClick={this.handleClick}>랜덤 색상</button>
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
