import './App.css';
import MyComponent from './Components/MyComponent';
import Counter from './Components/Counter';
import Say from './Components/Say';
import EventPractice from './Components/EventPractice';
import EventPracticeFunc from './Components/EventPracticsFunc';

const App = () => {
  return (
    <div>
      <MyComponent>홍길동</MyComponent>
      <Counter />
      <Say />
      <EventPractice />
      <EventPracticeFunc />
    </div>
  )
}

export default App;
