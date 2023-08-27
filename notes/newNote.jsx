import React,{useState,useEffect} from 'react';
import { NoteStyle, Icons, DeleteIcon} from './noteStyle';
import {MdOutlineNoteAlt, MdDeleteForever} from "react-icons/md"

export default function Newnote({note, onClick,text,cardBg}) {
    const [newCard, setNewCard] = useState();
    useEffect(()=>{
        !newCard && setNewCard(cardBg);
    },[newCard]);

  return (
    <NoteStyle className={`card mt-2`}>
        <div className={`card-header text-right ${newCard}`}>
            <Icons>
                <MdOutlineNoteAlt/>
                <DeleteIcon>
                    <MdDeleteForever onClick={()=>onClick(note.id)}/>
                </DeleteIcon>
            </Icons>
        </div>
        <div className='card-body'>
            <textarea style={{border:"none", outline:"none"}}>{text}</textarea>
        </div>
    </NoteStyle>
  );
}
