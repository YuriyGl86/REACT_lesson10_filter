import './App.css';
import MainApp, { MainApp2 } from './components/MainApp';
import { List } from './components/List';
import { Filter } from './components/Filter';

function App() {
  
  return (
    <div className="App">
      {/* <MainApp />
      <hr /> */}
      <MainApp2 />
      <Filter/>
      <List/>
    
    </div>
  );
}

export default App;
