import React, {useState} from 'react'
import { MdSearch } from 'react-icons/md'

function Search(props) {

    const changeHandler =(event)=>{
props.handleSearchNote(event.target.value);
    }

  return (
    <div className='search'>
<MdSearch className='search-icons' size='1.3em'/>
    <input type='text' placeholder='seacrh' onChange={changeHandler} />
    </div>
  )
}

export default Search