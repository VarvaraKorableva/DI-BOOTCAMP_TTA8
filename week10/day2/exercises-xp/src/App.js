import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary'
import BuggyCounter from './components/BuggyCounter'
import Color from './components/Color'
import Color3 from './components/Exercise3'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
      <Color></Color>
      <Color3></Color3>
    </div>
  );
}

export default App;
