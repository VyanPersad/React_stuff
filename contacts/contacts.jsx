import React, {useRef,useEffect,  useState} from "react";
import Title from "../components/title";
import Data from "./data.json";
import ContactTag from "./contact_tag";

export default function Contacts() {
    let inputSearch = useRef(null);
    useEffect(()=>{
        inputSearch.current.focus();
    });

    const [searchContact, setSearchContact]=useState('');
  return (
    <div className="text-center">
        <Title text={"Filter Contacts"}/>
        <input 
            type="text" 
            placeholder="Search by 1st name." 
            className="mb-2"
            style={{padding:"0.3rem 0.5rem" }}
            ref={inputSearch}
            onChange={(e)=>setSearchContact(e.target.value)}
        />
        <section 
            className="d-flex" 
            style={{gap:15, maxWidth:1600, margin:"auto", flexWrap:"wrap"}}>
            {Data.filter((contact)=>{
                if(searchContact===""){
                    return contact;
                }else if(contact.first_name.toLocaleLowerCase().includes
                    (searchContact.toLocaleLowerCase())){
                        return contact;
                    }
            }).map((contact)=> (
                <ContactTag 
                    contact={contact}
                    cardColor="bg-primary"
                    headerColor="text-white"
                    textColor="text-primary"/>
                ))}
        </section>
    </div>
  );
}
