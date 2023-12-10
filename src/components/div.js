import React, { useEffect, useState,useRef } from 'react'
import './div.css'
import Song from "../song.mp3"


function Name() {
    const [players,setPlayers] = useState(false);
    const audioRef = useRef()
    
    const player = ()=>{
        if(players===false){
            setPlayers(true)
            audioRef.current.play() 
        } else{
            setPlayers(false)
            audioRef.current.pause()
        }
        console.log(audioRef);
    }

 return(
    <div className='bg-secondary m-1 '  >
    <audio ref={audioRef}  src= {Song} />
    <button   onClick={player} className= { players? " bi bi-play-btn-fill btn btn-secondary text-warning  ": " bi bi-pause-btn-fill btn btn-secondary text-warning  " + " " }  >  </button>
    </div>
 )
}

export default Name;