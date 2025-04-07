import './App.css';
import MyComponent from './Components/MyComponent';
import Counter from './Components/Counter';
import Say from './Components/Say';
import EventPractice from './Components/EventPractice';

const App = () => {
  return (
    <div>
      <MyComponent>홍길동</MyComponent>
      <Counter />
      <Say />
      <EventPractice />
    </div>
  )
}

export default App;
