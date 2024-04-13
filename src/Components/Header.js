import React, { useState } from 'react';

const Header = (props) => {
    const {add}=props
    const[text,setText]=useState('')
    const keyEnter=()=>{
        add(text)
        setText('')
    }
    return (
        <div className='header'>
            <h2>My To Do List</h2>
            <input value={text} placeholder='Enter your todo' onChange={(e)=>(setText(e.target.value))} onKeyDown={(e)=>{
                if(e.key=='Enter'){
                    keyEnter()
                }
            }}></input>
        </div>
    );
}

export default Header;
