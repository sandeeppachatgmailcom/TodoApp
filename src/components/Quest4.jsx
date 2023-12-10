import React,{useEffect, useState} from 'react';
import './Quest4.css';

function ToDoApp(){
    const initialTasks = [['Reading Notebook',1,1],[ 'Playing Cricket',0,2],[ 'riding Horse',1,3],[ 'Going School',0,4], ['Selling Goods',0,5]];
    let [value,setValue]= useState('')
    let saveIndex =0;
    const [tasks, setTasks] = useState(initialTasks);
    
    const nextIndex  = ()=>{
        const tempTasks = [...tasks];
        const max = tempTasks.reduce((max,current)=> (current[2]>max[2]?max=current:max),tempTasks[0] )
        return parseInt(max[2])+1;

    }
    
    
    
    const editTask = (taskId)=>{
        if(document.getElementById('idNewText').value) {
             (document.getElementById('addNewbutton').click()); 
        }
        
        saveIndex = taskId;
        const tasklist = [...tasks]
        const tast = tasklist.splice(taskId,1);
        console.log(tast,saveIndex)
        setValue(tast[0][0])
        setTasks(tasklist);
    }


    const deleteTask = (position)=>{
        const tasklist = [...tasks]
        tasklist.splice(position,1)
        setTasks(tasklist);
        
    }
    const makeitStrike=(index,key)=>{
        const tempTasks = [...tasks];
        const temptask = tempTasks.filter((current)=> ((current[2] ==key[2] )?current:null ) ) 
         
        temptask[0][1]?temptask[0][1]=0:temptask[0][1]=1;
         
        tempTasks.splice(index,1,temptask[0])
        setTasks(tempTasks); 
        
    }

    const takeInput = (event)=>{
        setValue(event.target.value)
        console.log(value)
    };
     
    const addTask = (task)=>{
        
        if(task){
        if (task.trim() !== '') {
             
            const newTask = [task,0,nextIndex()]
            console.log(newTask);
            setTasks([...tasks,newTask]);
            setValue('');

        }
    }
    }
    const reloadList = () => {
        return tasks.map((item, index) => (
            <div className='container-flex rounded text-light text-left' key={'li' + index}>
                <label  onClick={()=>{ console.log(index);    makeitStrike(index,item);}} id={'lbl'+index} style={{ textDecoration: item[1] ? 'line-through' : 'none' }}  className='text col-8 ' htmlFor={index}>  {item[0]} </label>
                <button key={index} onClick={()=>{deleteTask(index)}}    value={index} className='col-1 btn text-warning bi bi-trash'>   </button>
                <button key={index} onClick={()=>{editTask(index)}}  value={index} className='col-1 btn text-warning bi bi-pencil-fill'>   </button>
            </div>
        ));
    };

    useEffect(()=>{
        reloadList();
    }
    ,[tasks])

    return(
        <div className='container-flex border m-1 rounded  text-light text-left '>
            <div className=''>
            <h5> ToDo List </h5>
            </div>
            <div className='container-fluid col-12 d-flex   '>
                <input onChange={takeInput} value={value}  className='text rounded border  w-100' type="text" name="" id="idNewText" />
                <button onClick={()=>{
                    addTask(document.getElementById('idNewText').value)
                }} className='btn border bi bi-file-earmark-plus-fill text-warning' id='addNewbutton' type="button"> </button>
            </div>
            <div className='col-12 d-flex'>
                <ul className='col-12  w-100'>
                    {reloadList()}     
                </ul>
            </div>

        </div>
    )
}
 


export default ToDoApp;