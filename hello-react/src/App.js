import logo from './logo.svg'
import './App.css';
import { Component } from 'react';
import StyledComponentsSample from './Components/StyledComponentsSample';

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponentsSample />
      </div>
    )
  }
}

/*
const App = () => {

  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
*/

/*
const App = () => {
  return (
    <div>
    </div>
  )
}
*/
export default App;
