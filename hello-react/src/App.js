import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import Average from './Components/Average';

const App = () => {

  return (
    <div>
      <ErrorBoundary>
        <Average />
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
