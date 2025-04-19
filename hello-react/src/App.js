import './App.css';
import { useState } from 'react';
import ErrorBoundary from './Components/ErrorBoundary';
import Info from './Components/Info';

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
        {visible && <Info />}
      </ErrorBoundary>
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
