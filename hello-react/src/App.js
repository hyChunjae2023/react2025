import './App.css';
import MyComponent from './Components/MyComponent';
import Counter from './Components/Counter';
import Say from './Components/Say';

const App = () => {
  return (
    <div>
      <MyComponent>홍길동</MyComponent>
      <Counter />
      <Say />
    </div>
  )
}

export default App;
