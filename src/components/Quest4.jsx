import React,{useContext, useEffect, useState} from 'react';
import './Quest4.css';
import  { auth } from '../Firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc,getDocs, deleteDoc, doc   } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBi5ybnqmE3NKKq8f9hywnFp7ixFdHsJ2w",
    authDomain: "meta-gear-397809.firebaseapp.com",
    projectId: "meta-gear-397809",
    storageBucket: "meta-gear-397809.appspot.com",
    messagingSenderId: "75139760459",
    appId: "1:75139760459:web:3f1913102df5167d82a8ce",
    measurementId: "G-FYDTEETQPP"
  };
   // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




function ToDoApp(){
    let initialTasks = [];
    const [tasks, setTasks] = useState(initialTasks);


    //let initialTasks = [{Task:'Reading Notebook',Strike:1,index:1},{Task:'Playing Cricket',Strike:0,index:2},{Task:'riding Horse',Strike:1,index:3},{Task:'Going School',Strike:0,index:4}, {Task:'Selling Goods',Strike:0,index:5}];
    
    useEffect(() => {
        async function getData() {
          try {
            const querySnapshot = await getDocs(collection(db, 'task'));
            const result = querySnapshot.docs.map((doc) => {
                let temp = doc.data().newTask
                temp.id = doc.id;
                return temp
            });
            setTasks(result);
          } catch (error) {
            console.error('Error getting documents: ', error);
          }
        }
    
        getData();
      }, [db]);

      
      getData();
      async function getData() {
          const querySnapshot = await getDocs(collection(db, 'task'));
          querySnapshot.forEach((doc) => {
               
              let temp = doc.data().newTask
              temp.id = doc.id;
              initialTasks.push(temp)

          });
      }
    
       
    let [value,setValue]= useState('')
    let saveIndex =0;
    
 
     const addTask = async (task)=>{
        if(task){
        if (task.trim() !== '') {
            const newTask =  {task:task,strike:0,index:nextIndex(),delete:false}
            console.log(newTask,db);
            try {
                const docRef = await addDoc(collection(db, "task"),{newTask});
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
             setTasks([...tasks,newTask]);
             setValue('');

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
    
    const editTask = (taskId)=>{
        if(document.getElementById('idNewText').value) {
             (document.getElementById('addNewbutton').click()); 
        }
        saveIndex = taskId;
        const tasklist = [...tasks]
        const tast = tasklist.splice(taskId,1);
        setValue(tast[0][0])
        setTasks(tasklist);
    }


    const deleteTask =async (position)=>{
        
        console.log(position,'position')

             await deleteDoc(doc(db,"task",position.id))
          
       
        
    }

    const makeitStrike=(index,key)=>{
        const tempTasks = [...tasks];
        console.log(tempTasks,'tempTasks')
        const temptask = tempTasks.filter((current)=> ( current.index ==key ) ) 
        console.log(tempTasks,'tempTasks');
        temptask[0].Strike?temptask[0].Strike=0:temptask[0].Strike=1;
        tempTasks.splice(index,1,temptask[0])
        setTasks(tempTasks); 
        
    }

    const takeInput = (event)=>{
        setValue(event.target.value)
        console.log(value)
    };
    
    const reloadList = () => {
        return tasks.map((item, index) => (
             
            <div className='container-flex rounded text-light text-left' key={'li' + index}>
                <label  onClick={()=>{makeitStrike(index,item.index);}} id={'lbl'+index} style={{textDecoration: item.Strike ? 'line-through' : 'none' }}  className='text col-8 ' htmlFor={index}>  {item.task } </label>
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
                console.log(value)}}  className='text rounded border  w-100' type="text" name="" id="idNewText" />
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