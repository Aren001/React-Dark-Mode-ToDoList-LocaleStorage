import React from 'react';


const Nav = ({dark , setDark}) => {
    return(
        <>
            <div className='nav'>
        <label className="switch">
          
        <input type="checkbox"

        checked={dark}
        
        onChange={() => setDark(!dark)}
         />
        <span className="slider round"></span>
        </label>
      </div>
        </>
    )
}
export default Nav;