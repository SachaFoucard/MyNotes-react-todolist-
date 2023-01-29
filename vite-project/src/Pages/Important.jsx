import { useEffect } from "react"
import { useContext } from "react"
import { NotesContext } from "../Context/NotesContext"
import Notes from "../Components/Notes"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
export default function Important() {

  const { importantNotes, setImportants } = useContext(NotesContext)

  useEffect(() => {
    setImportants(importantNotes)
  }, [importantNotes])

  return (
    <>
      <h2>Important notes <FontAwesomeIcon icon={faStar}/></h2>
    <div className="grid">
      {

        importantNotes.length > 0 ?
          importantNotes.map((item, i) => <Notes key={i} {...item} />)
          : <h1>Notes Empty</h1>
      }
      </div>
    </>
  )
}
