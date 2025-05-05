import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import InfoUseInputsCustomHook from './Components/InfoUseInputsCustomHook';

const App = () => {

  return (
    <div>
      <ErrorBoundary>
        <InfoUseInputsCustomHook />
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
