import React, { Children } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const NotesContext = createContext()

export default function NotesContextProvider({ children }) {
  // AObjects of Array for each Pages
  const [allNotes, setAllNotes] = useState([]);
  const [businessNote, setBusiness] = useState([]);
  const [importantNotes, setImportants] = useState([]);
  const [social, setSocial] = useState([]);

  //Checkboxes
  const [chekboxBusiness, SetCheckboxBusiness] = useState();
  const [chekboxSocial, SetCheckboxSocial] = useState();
  const [chekboxImportant, setChekboxImportant] = useState();


  // Informations states to create new Notes
  const [title, setTitle] = useState();
  const [descri, setDescri] = useState();
  const [day, setDay] = useState(new Date().getDay())
  const [time, setTime] = useState(new Date().getTime())
  const [hour, setHour] = useState(new Date().getHours())
  const [minute, setMinute] = useState(new Date().getMinutes())


  const CreateNewNote = (title, descri, day, time, hour, minute) => {
    const item = {
      title,
      descri,
      day,
      time,
      hour,
      minute
    }
    return item
  }
 


  const value = {
    //Object All
    setAllNotes,
    allNotes,
    //createNotes
    title,
    setTitle,
    setDescri,
    descri,
    CreateNewNote,
    day,
    time,
    hour,
    minute,

    //Object business
    setBusiness,
    businessNote,
    //checkbox Business
    chekboxBusiness,
    SetCheckboxBusiness,

    //object Social
    setSocial,
    social,
    //checkbox Social
    chekboxSocial,
    SetCheckboxSocial,

    //checkbox Important
    chekboxImportant,
    setChekboxImportant,

    //Object Importants
    importantNotes,
    setImportants,
  }
  return (
    <div>
      <NotesContext.Provider value={value}>
        {children}
      </NotesContext.Provider>
    </div>
  )
}
