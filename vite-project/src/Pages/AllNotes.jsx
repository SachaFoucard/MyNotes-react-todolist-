import React from 'react'
import { useContext } from 'react'
import { NotesContext } from '../Context/NotesContext'
import Notes from '../Components/Notes'
import { useEffect } from 'react'
import data from '../../public/data/note.json'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWallet} from '@fortawesome/free-solid-svg-icons'


export default function AllNotes() {

  const { setAllNotes, allNotes } = useContext(NotesContext)

  useEffect(() => {
    setAllNotes(data)
  }, [])


  return (
    <>
    <h2>All notes <FontAwesomeIcon icon={faWallet} /></h2>
      <div className='grid'>
        {
          allNotes.length > 0 ?
            allNotes.map((item, i) => <Notes key={i} {...item} />)
            :
            <h1>Notes Empty</h1>
        }
      </div>
    </>
  )
}
