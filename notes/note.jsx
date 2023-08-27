import React, {useState} from 'react';
import Newnote from './newNote';
import Button from '../components/button';
import {v4 as uuidv4} from "uuid";

export default function Note() {

    const [notes, setNotes]=useState([]);

    const addNewNote = (newNote)=>{
        const newNotes = [...notes, newNote];
        newNotes.filter((note)=>!note.id && (note.id=uuidv4()));
        setNotes(newNotes);
    };
    const delNote=(id)=>{
      setNotes(notes.filter((note)=> note.id !==id));
    };
    const cards=[
      "bg-info",
      "bg-danger",
      "bg-primary",
      "bg-success",
      "bg-warning",
    ]
    const randomBg=()=>{
      const random = Math.floor(Math.random()*cards.length);
      return cards[random];
    }
  return (
    <div className='container'>
        <Button btnClass={"btn-info m-1"} text={"+ New note"}
          onClick={addNewNote}/>
        <div className='container container-sm d-flex'
            style={{gap:25, flexWrap:"wrap"}}>
              {notes.map((note)=>(
                <Newnote 
                  key={note.id} 
                  note={note} 
                  onClick={delNote}
                  cardBg={randomBg}/>
              ))}
        </div>
    </div>
  )
}
