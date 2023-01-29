import React from 'react'
import { useContext, useEffect } from 'react'
import { NotesContext, } from '../Context/NotesContext'
import Notes from '../Components/Notes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

export default function Social() {

  const { social, setSocial } = useContext(NotesContext)

  useEffect(() => {
    setSocial(social);
  }, [])
  return (
    <div>
      <h2>Social notes <FontAwesomeIcon icon={faShare} /></h2>
      <div className='grid'>
        {
          social.length > 0 ?
            social.map((item, i) => <Notes key={i} {...item} />)
            :
            <h1>Notes Empty</h1>

        }
      </div>
    </div>
  )
}
