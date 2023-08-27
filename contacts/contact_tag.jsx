import React from 'react'

export default function ContactTag({
    contact, 
    width=300, 
    cardColor="bg-danger", 
    textColor="black",
    headerColor="white",
}){
  return (
    <div
        key={contact.id} 
        className={`card bg-light m-auto`}
        style={{width:width}}>
            <div className={`card-header ${cardColor}`}><h4 className={`${headerColor}`}>{contact.first_name}</h4></div>
            <div className="card-body text-left">
                <p className="card-text">{" "}
                <span className={`fw-bold ${textColor}`}>Last Name: </span>{contact.last_name}                
                </p>
                <p className="card-text">
                    <span className={`fw-bold ${textColor}`}>e-mail: </span>{contact.email}
                </p>{" "}
                <p className="card-text">
                    <span className={`fw-bold ${textColor}`}>Phone: </span>{contact.phone}
                </p>{" "}
                <p className="card-text">
                    <span className={`fw-bold ${textColor}`}>Username: </span>{contact.user_name}
                </p>{" "}                
            </div>
    </div>
  )
}
 