import React ,{ useContext, useEffect,useState} from 'react'
import  './weather.css'
import axios from 'axios'
import { UserContext } from './context'

 

function Weather() {
    const {temperature,setTemperature} = useContext(UserContext)
    const [weathervalue,setWeathervalue]=useState({
        main:{},
        weather:[{}],
        sys:{country:''}
    })
    
    


    useEffect(()=>{
        
        async function getData(){
        const api  = "https://api.openweathermap.org/data/2.5/weather?lat=11.258753&lon=75.780411&appid=ab214ff63eaf4e1428ce6d1e2bba0478"
        const data =await axios.get(api)  
        setWeathervalue(data.data)
        console.log(weathervalue)
        }

        getData();
    } ,[])
 
    return(
        <div className="container-flex border m-1 rounded maincontainer text-light text-left ">
            <h2>{weathervalue.name}</h2>  
            <small>{temperature}</small>
            <h4>  {`${Math.floor(weathervalue.main.temp/10)}`}&deg;c </h4>
            <h6>{weathervalue.weather[0].main}</h6>
            <small>{weathervalue.weather[0].description}</small>
        </div>
    )
}

export default Weather