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
import { AuthContext, AuthProvider } from './authentication/authentication';
 
function App() {
  return(
    <div>
      <AuthProvider>
        <Home/>
      </AuthProvider>
    </div>
    )
}

export default App;
