import './App.css';
import { ApiContextProvider } from './contextApi';
import Employees from './Employees';

function App() {
  return (
    <ApiContextProvider>
      <div className='App'>
        < Employees />
      </div>
    </ApiContextProvider>
  );
}

export default App;
