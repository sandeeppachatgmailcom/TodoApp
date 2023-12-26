import React,{useContext, useEffect, useState} from 'react';
import './Quest4.css';
import  db  from '../Firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc,getDocs, deleteDoc, doc, setDoc   } from "firebase/firestore";





function ToDoApp(){
    let initialTasks = [];
    const [tasks, setTasks] = useState(initialTasks);

    useEffect(() => {
        async function getData() {
          try {
            const querySnapshot = await getDocs(collection(db, 'task'));
            const result = querySnapshot.docs.map((doc) => {
                const tempData = doc.data();
                if (tempData && tempData.newTask) {
                    const temp = tempData.newTask;
                    temp.id = doc.id;
                    console.log(temp, 'temp');
                    return temp;
                } else {
                    // Handle the case where newTask is undefined or null
                    return null; // or handle it in a way that makes sense for your use case
                }
            });
            console.log(result,'data loaded')
            setTasks(result);
          } catch (error) {
            console.error('Error getting documents: ', error);
          }
        }
    
        getData();
        console.log(tasks,'taskstaskstaskstaskstasks')
      }, [db]);

       
      
       
    let [value,setValue]= useState('')
    let saveIndex =0;
    
 
     const addTask = async (task)=>{
        if(task){
        if (task.trim() !== '') {
            const newTask =  {task:task,strike:0,index:nextIndex(),delete:false}
            console.log(newTask,db);
            const res= tasks.filter((item)=>{
                return item.task==task
            })
            console.log(res,'ssdsdsdsdsd')
            if (!res.length){

            try {
                const docRef = await addDoc(collection(db, "task"),{newTask});
                console.log("Document written with ID: ", docRef);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
              setTasks([...tasks,newTask]);
             setValue('');
            }
            else{
                alert('already exist')
            }
             

        }
    }
    }

    
    const nextIndex  = ()=>{
        const tempTasks = [...tasks];
        let max = {}
        if(tempTasks.length ){
        max = tempTasks.reduce((max,current)=> (current.index>max.index?max=current:max),tempTasks[0]) }
        else max.index = 0;
        return parseInt(max.index)+1;
    }
    
    const editTask =async  (taskId)=>{
         
        if(document.getElementById('idNewText').value) {
             (document.getElementById('addNewbutton').click()); 
        }
        saveIndex = taskId;
        const tasklist = [...tasks]
        const tast = tasklist.splice(taskId,1);
        setValue(tast[0].task)
        console.log(tast[0],'dsasasasasassasasasa' );
        await deleteDoc(doc(db,'task',tast[0].id))
        setTasks(tasklist);
        

    }


    const deleteTask =async (position)=>{
        
        console.log(position,'position')
        await deleteDoc(doc(db,"task",position.id))
          
        async function getData() {
            try {
              const querySnapshot = await getDocs(collection(db, 'task'));
              const result = querySnapshot.docs.map((doc) => {
                  const tempData = doc.data();
                  if (tempData && tempData.newTask) {
                      const temp = tempData.newTask;
                      temp.id = doc.id;
                      console.log(temp, 'temp');
                      return temp;
                  } else {
                      // Handle the case where newTask is undefined or null
                      return null; // or handle it in a way that makes sense for your use case
                  }
              });
              console.log(result,'data loaded')
              setTasks(result);
            } catch (error) {
              console.error('Error getting documents: ', error);
            }
          }
      
          getData(); 
    }

    const makeitStrike=async (index,key)=>{
        const tempTasks = [...tasks];
        console.log(tempTasks,'tempTasks')
        const temptask = tempTasks.filter((current)=> ( current.index ==key ) ) 
        console.log(tempTasks,'tempTasks');
        temptask[0].strike?temptask[0].strike=0:temptask[0].strike=1;
        console.log(temptask[0],'temxxxxxxxxxxxxxxxxxxxxxp')
        tempTasks.splice(index,1,temptask[0])
        await setDoc(doc(db,'task',temptask[0].id),{newTask:temptask[0]})
        setTasks(tempTasks); 
    }

    const takeInput = (event)=>{
        setValue(event.target.value)
        console.log(value)
    };
    
    const reloadList = () => {
        return tasks.map((item, index) => (
            <div className='container-flex rounded text-light text-left' key={item.id}>
                <label  onClick={()=>{makeitStrike(index,item.index);}} id={'lbl'+index} style={{textDecoration: item.strike ? 'line-through' : 'none' }}  className='text col-8 ' htmlFor={index}>  {item.task } </label>
                <button key={index} onClick={()=>{deleteTask(item)}}  value={index} className='col-1 btn text-warning bi bi-trash'>   </button>
                <button key={index} onClick={()=>{editTask(index)}}  value={index} className='col-1 btn text-warning bi bi-pencil-fill'>   </button>
            </div>
        ));
    };
    
    useEffect(()=>{
        reloadList();
    }
    ,[tasks])

    return(
        <div className='container-flex border m-1 rounded  text-light text-left   '>
            <div className=''>
            <h5> ToDo List </h5>
            </div>
            <div className='container-fluid col-12 d-flex   '>
                <input onChange={(e)=>{setValue(e.target.value);
                console.log(value)}} value={value} className='text rounded border  w-100' type="text" name="" id="idNewText" />
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