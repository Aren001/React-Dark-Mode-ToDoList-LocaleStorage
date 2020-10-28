import React ,{useEffect,useState}from 'react';
import Nav from './Nav';
import ToDo from './ToDo';
import uuid from "uuid";
import './index.css';


const  App = () => {

  //Dark Mode

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }

const [dark,setDark] = useState(getMode());

//To Do List

const [list , setList] = useState([]);
const [input, setInput] = useState('');






useEffect(() => {

  //Dark Mode
    localStorage.setItem("mode",JSON.stringify(dark))

    //To Do List

    const list = window.localStorage.getItem('list');
    const parsedList = JSON.parse(list);
    if(list == null){
        return false
    }
    else{
        setList(parsedList)
        console.log(list);
    }


},[dark])



  //BUTTON ADD

const  addTask = () => {

    if(input){

        const Items={
            id:uuid(),
            value:input,
            // Date: new Date().toUTCString()
        };


        if(localStorage.getItem('list')==null ){
            const list=[]
            list.push(Items);
            localStorage.setItem("list",JSON.stringify(list))
        }
        else{
            const list=JSON.parse(localStorage.getItem('list'))
            list.push(Items)
            localStorage.setItem("list",JSON.stringify(list))
        }
        
        setList(JSON.parse(localStorage.getItem('list')))

        console.log(Items)

        setInput('');
    }


}


//VALUE ONCHANGE

const handle = (e) => {
  
  setInput(e.target.value)
}


//DELETE

const deleteItem = (event) => {

let index = event.target.getAttribute('data-key')
let listValue=JSON.parse(localStorage.getItem('list'));
listValue.splice(index,1)

setList(listValue)

localStorage.setItem('list',JSON.stringify(listValue))
}

//CLEAR LIST

const clearList =(event) => {

let index = event.target.getAttribute('data-key')
let listValue=JSON.parse(localStorage.getItem('list'));
listValue.splice(index,list.length)

setList(listValue)

localStorage.setItem('list',JSON.stringify(listValue))

// console.log('allp')
}





  return (
    <div className={dark ? "App dark-mode" :"App "}>
      
     
      <Nav
      dark={dark}
      setDark={setDark}
      />



      <div className='content'>
        <b><h1>{dark?'Dark Mode is ON':'Light Mode is ON'}</h1></b>


        <ToDo
          dark={dark}
          list={list}
          input={input}
          addTask={addTask}
          handle={handle}
          deleteItem={deleteItem}
          clearList={clearList}
        />

        

      </div>
      

    </div>
  );
}

export default App;
