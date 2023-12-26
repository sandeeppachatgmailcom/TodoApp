import React from "react";

import '../App.css';
import Name from "../components/div";
import Weather from '../components/weatherApp';
import TimeBoard from '../components/time';
import ToDoApp from '../components/Quest4';
import TryUseEffect from '../components/UseEffect';
import Comp from '../components/classComponent'
// import Context, { userContext } from './components/context';
import { useState } from 'react';
import FunComp from '../components/Func';
import Second from '../components/2ndClassComponent';
import Parent from "../components/page2Parent";


function Contact(){
    const [temperature, setTemperature] = useState(0);
    return (
      <div className="App container-fluid d-flex  ">
         <Parent/>
      </div>
    );
}

export default Contact