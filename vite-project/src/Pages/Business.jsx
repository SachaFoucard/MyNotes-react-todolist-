import React from 'react'
import { useContext, useEffect } from 'react'
import { NotesContext } from '../Context/NotesContext'
import Notes from '../Components/Notes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons'

export default function Business() {

  const { setBusiness, businessNote } = useContext(NotesContext);

  useEffect(() => {
    setBusiness(businessNote)
  }, [])

  return (
    <>
      <h2>Business notes <FontAwesomeIcon icon={faBusinessTime} /></h2>
      <div className='grid'>
        {
          businessNote.length > 0 ?
            businessNote.map((item, i) => <Notes key={i} {...item} />)
            :
            <h1>Notes Empty</h1>
        }
      </div>
    </>
  )
}
