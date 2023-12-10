import logo from './logo.svg';
import './App.css';
import Name from './components/div'
import Weather from './components/weatherApp';
import TimeBoard from './components/time';
import ToDoApp from './components/Quest4';
import TryUseEffect from './components/UseEffect';

function App() {
  return (
    <div className="App container-fluid d-flex  ">
       <div className='col-10 '>

       </div>
       <div className='col-2 container-flex'>
          <div className='container-flex col-12'>
              <Name name={'Sandeep Pachat'} address={'Thekum kai meethal'}/>  
          </div>
          <div className='container-flex  col-12 '>
              <Weather />
           </div>
           <div className='container-flex  col-12'>
            <TimeBoard/>
           </div>
           <div className = 'container-flex  col-12'>
           <ToDoApp />
           </div>
           <div className = 'container-flex  col-12'>
            <TryUseEffect/>
            
           </div>
       </div>
    </div>
  );
}

export default App;
