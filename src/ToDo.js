import React , {useEffect,useState} from 'react';


const ToDo = ({dark , list ,input, addTask , handle , deleteItem , clearList}) => {

    return(
      <div className='inp'>
      <input 
      className={dark ? 'inputsDark':'inputsLight'}
      type='text'
      placeholder='Add'
      onChange={handle}
      value={input}

       /> 
       <button className={dark ? "button1Dark":"button1Light"}
       onClick={addTask}
        >ADD
        </button>
       <hr  style={dark ?{backgroundColor:'white',width:'380px'}:{backgroundColor:'black',width:'380px'}}/>

       <b><h2 >LIST</h2></b>

       <hr style={dark ?{backgroundColor:'white',width:'550px',height:'8px',borderRadius:'80px'}:{backgroundColor:'black',width:'550px',height:'8px',borderRadius:'80px'}}/>


       <ol>
                                {
                                    list.map((item,index)=>
                                    {
                                        return(
                                        <li key={item.id} > {item.value}
                                        {/* sran ushadir exi  DELETIN */}
                                        <button className={dark ? 'button2' : 'button2Light'} 
                                        type="button" 
                                        value="delete" 
                                        data-key={index} 
                                        onClick={deleteItem}>Delete
                                        </button></li>
                                        ) 
                                    })
                                } 

                            </ol>
                            <button 
                            className={dark ? "button1Dark":"button1Light"}
                            onClick={clearList} >CLEAR LIST</button>
              
  </div>
    )

}
export default ToDo;