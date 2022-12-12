import { nanoid } from 'nanoid'
import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

function NotesList(props) {

  return (
    <div className='notes-list'>
        {props.notes.map(note=>(
            <Note key={nanoid()} id={note.id} text ={note.text} date={note.date} deleteNote ={props.deleteNote}/>
        ))}
     <AddNote handleAddNote ={props.handleAddNote}/>
    </div>
  )
}

export default NotesList