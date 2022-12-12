import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import NotesList from "./NotesList";
import Search from './Search';
import Header from './Header';

const Apps =()=>{
    const [notes,setNotes] = useState([{
id:nanoid(),
text:'This is my first note',
date:'15/04/2022'
    },
{id:nanoid(),
    text:'This is my second note',
    date:'15/03/2022'},
    {
        id:nanoid(),
        text:'This is my third note',
        date:'15/05/2022'}  
]);

const [searchText, setSearchText] = useState('');
const [darkMode, setDarkMode] = useState(false);

useEffect(()=>{
const savedNotes = JSON.parse(localStorage.getItem('notes'));
if(savedNotes){
    setNotes(savedNotes);
}

},[])


useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes));
},[notes]);


const addNote =(text)=>{
const date = new Date();
const newNote ={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString(),
    }

setNotes([...notes, newNote]);
}

const deleteNote =(id)=>{
const newNotes = notes.filter((note)=>note.id !== id);
setNotes(newNotes);
}
const theme = darkMode ? `container dark-mode` :'container'
return (<div className={theme}>
    <Header setDarkMode ={setDarkMode}/>
    <Search handleSearchNote ={setSearchText}/>
<NotesList notes= {notes.filter(note =>note.text.toLowerCase().includes(searchText))} 
handleAddNote={addNote} deleteNote ={deleteNote}/>
</div>)

}
export default Apps;