import React from 'react';
import Button from '../components/button';
import { FaAddressBook, FaArrowsAltV } from 'react-icons/fa';

export default function SearchFilter({handleToggleContacts,handleToggleSortAZ, handleSearchContact,}) {
  return (
    <section className='text-center'>
        <Button 
            text={''} 
            btnClass={'btn-secondary m-2'} 
            icon={<FaAddressBook/>}
            onClick={handleToggleContacts}/>
        <input type='text' placeholder='Search by 1st name' className='ps-2'
            onChange={(e)=>handleSearchContact(e.target.value)}/>
        <Button text={''} btnClass={'btn-secondary m-2'} icon={<FaArrowsAltV/>}
            onClick={handleToggleSortAZ}/>
    </section>
  );
}
