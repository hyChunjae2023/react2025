import logo from './logo.svg'
import './App.css';
import ClassnamesSample from './Components/ClassnamesSample';
import ClassnamesModuleSample from './Components/ClassnamesModuleSample';

const App = () => {

  return (
    <div>
      <ClassnamesSample highlighted={true} theme='theme' hello='Hello' />
      <ClassnamesSample highlighted={false} theme='theme' hello='Hi' />
      <hr />
      <ClassnamesModuleSample />
    </div>
  )
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
