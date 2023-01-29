import React from 'react'
import { useContext, useState } from 'react'
import { NotesContext } from '../Context/NotesContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faX ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'



export default function WindowInput({ setShow, show }) {
    const {
        //CREATE NEW NOTES
        title,
        setTitle,
        setDescri,
        descri,
        day,
        time,
        hour,
        minute,
        CreateNewNote,

        //CHECKBOXS
        SetCheckboxBusiness,
        chekboxBusiness,
        SetCheckboxSocial,
        chekboxSocial,
        chekboxImportant,
        setChekboxImportant,

        //SET
        setAllNotes,
        setBusiness,
        setSocial,
        setImportants,

    } = useContext(NotesContext)


    const pD = (e) => {
        e.preventDefault()
    }

    const close = () => {
        setShow(!show)
    }

    const newNote = (e) => {
        if (chekboxBusiness) {
            setAllNotes((prev) => [...prev, CreateNewNote(title, descri, day, time, hour, minute)])
            setBusiness((prev) => [...prev, CreateNewNote(title, descri, day, time, hour, minute)])
        }
        if (chekboxSocial) {
            setAllNotes((prev) => [...prev, CreateNewNote(title, descri, day, time, hour, minute)])
            setSocial((prev) => [...prev, CreateNewNote(title, descri, day, time, hour, minute)])
        }
        if (chekboxImportant) {
            setAllNotes((prev) => [...prev, CreateNewNote(title, descri, day, time, hour, minute)])

            setImportants((prev) => [...prev, CreateNewNote(title, descri, day, time, hour, minute)])
        }
        setTitle('')
        setDescri('')
    }

    return (
        <>
            <h1>Enter a Note <FontAwesomeIcon icon={faPencil} />:</h1>
            <form onSubmit={pD}>
                <div className='window'>
                    <button className='bts-window-close' onClick={close}><FontAwesomeIcon icon={faX} /></button>
                    <div className='input title '>
                        <input type="text" id='input'
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter Title"
                            variant="outlined"
                            size="small"
                            value={title}
                        />
                    </div>
                    <div className='input'>
                        <textarea
                            onChange={(e) => setDescri(e.target.value)}
                            placeholder="Enter a description"
                            variant="outlined"
                            size="small"
                            rows={5}
                            sx={{ width: 100 }}
                            value={descri}>
                        </textarea>
                    </div>
                    <div className='checkboxes'>
                        <div className='input chkbox'>
                            <input type="checkbox"
                                onChange={(e) => SetCheckboxBusiness(e.target.checked)}
                            />

                        </div>
                        business
                        <div className='input important'>
                            <input type="checkbox"
                                onChange={(e) => setChekboxImportant(e.target.checked)}
                            />

                        </div>
                        Important
                        <div className='input social'>
                            <input type="checkbox"
                                onChange={(e) => SetCheckboxSocial(e.target.checked)}
                            />

                        </div>
                        Social
                        <div>
                            <button className='btn-send-window' onClick={() => newNote()}>Send <FontAwesomeIcon icon={faPaperPlane} /></button>
                        </div>
                    </div>
                </div>


            </form>
        </>
    )
}
