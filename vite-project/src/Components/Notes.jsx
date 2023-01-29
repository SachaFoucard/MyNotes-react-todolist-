import React from 'react'
import { useContext } from 'react';
import { NotesContext } from '../Context/NotesContext';

export default function Notes({ title, descri, day, hour, minute }) {

    const { setAllNotes, allNotes, setSocial, social,setBusiness,businessNote,importantNotes,setImportants } = useContext(NotesContext);

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const redelmove = (title) => {
        let newArray = allNotes.filter((item) => item.title != title); // search if this item exist on other Pages and remove it
        let newArraySocial = social.filter((item) => item.title != title); // search if this item exist on other Pages and remove it
        let newArrayBusiness = businessNote.filter((item) => item.title != title);// search if this item exist on other Pages and remove it
        let newArrayImportant = importantNotes.filter((item) => item.title != title);// search if this item exist on other Pages and remove it
        setAllNotes(newArray) // update the new object without the item
        setSocial(newArraySocial)// update the new object without the item
        setBusiness(newArrayBusiness)// update the new object without the item
        setImportants(newArrayImportant)// update the new object without the item   
    }

    return (
        <>
            <div className='notes'>
                <h1>New Note</h1>
                <p className='date'>{days[day]}  {hour}:{minute}</p>
                <h2>{title}</h2>

                <p className='description'>{descri}</p>
                <button onClick={() => redelmove(title)}>remove</button>
            </div>

        </>
    )
}
