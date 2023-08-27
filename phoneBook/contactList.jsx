import React from 'react';
import Contact from './contact';

export default function ContactList({contacts}) {
    const types=[
        'adventurer',
        'croodles',
        'identicon',
        'bottts',
        'avataaars',
        'lorelei',
        'miniavs',
        'micah',
    ];

    const genRanNum=()=>{
        return Math.floor(Math.random() * 8);
    }
  return (
    <ul>
        {contacts.map((contact, id)=>{
            return (
                <Contact 
                key={id}
                icon={`https://api.dicebear.com/6.x/${types[genRanNum()]}/svg`} 
                firstName={contact.first_name} 
                lastName={contact.last_name} 
                phoneNm={contact.phone}/>
            )
        })}

    </ul>
  );
}
