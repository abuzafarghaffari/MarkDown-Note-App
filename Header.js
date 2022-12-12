import React from 'react'

function Header(props) {
    const clickHandler=()=>{
        props.setDarkMode(prevState=>!prevState);
        console.log("header");
    }
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button className='save' onClick={clickHandler}>Toggle Mode</button>
    </div>
  )
}

export default Header