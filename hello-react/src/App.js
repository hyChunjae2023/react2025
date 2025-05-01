import './App.css';
import { useState } from 'react';
import ErrorBoundary from './Components/ErrorBoundary';
import InfoReducer from './Components/InfoReducer';
import CounterReducer from './Components/CounterReducer';

const App = () => {
  const [ visible, setVisible ] = useState(false);

  return (
    <div>
      <button onClick={() => {
        setVisible(!visible)
      }}>
        {visible ? '숨기기' : '보이기' }
      </button>
      <ErrorBoundary>
        {visible && <InfoReducer />}
      </ErrorBoundary>
      <CounterReducer />
    </div>
  )
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
