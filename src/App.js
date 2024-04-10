import './App.css';
import AppName from './Components/AppName';
import AddTODO from './Components/AddTODO';
import TODOItem1 from './Components/TODOItem1';
import TODOItem2 from './Components/TODOItem2';

function App() {
  return (
    <>
      <center className='todo-container'>
        <AppName />
        <div className='todo-items'>
          <AddTODO />
          <TODOItem1 />
          <TODOItem2 />
        </div>
      </center>
    </>
  );
}

export default App;
