import logo from './logo.svg';
import './App.css';
import Name from './components/div'
import Weather from './components/weatherApp';
import TimeBoard from './components/time';
import ToDoApp from './components/Quest4';
import TryUseEffect from './components/UseEffect';
import Comp from './components/classComponent'
// import Context, { userContext } from './components/context';
import { useState } from 'react';
import FunComp from './components/Func';
import Second from './components/2ndClassComponent';
import Home from './pages/home';
function App() {
  const [temperature, setTemperature] = useState(0);
  return (
    <div className="App container-fluid d-flex  ">
       {/* <userContext.Provider value={ {temperature,setTemperature}  }> */}

       <div className='col-2 '>
          
          <Comp />
          <Second name='sanoop' love='false' />
       </div>
       <div className='col-2 '>
          <FunComp />
       </div>
       <div className='col-2 '>
       <div className = 'container-flex  col-12'>
           
            
           </div>

      </div>
       <div className='col-4 '>

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
       </div>
       {/* </userContext.Provider> */}
    </div>
  );
}

export default App;
