import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { Link, } from 'react-router-dom';
import WindowInput from './WindowInput';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {

  const [show, setShow] = useState(false);

  const open = () => {
    setShow(!show)
  }

  return (
    <>
    
      {
        show ? <> <WindowInput setShow={setShow} show={show} />  <header>
          <nav>
            <ul className='grid clm4'>
              <li><Link to="/">All Notes</Link></li>
              <li><Link to="/business">Business</Link></li>
              <li><Link to="/important">Important</Link></li>
              <li><Link to="/social">Social</Link></li>
              <button onClick={() => open()} className='btn-nav btn-3'>Add Notes <FontAwesomeIcon icon={faPlus} /></button>
            </ul>
          </nav>
        </header> </> :

          <header>
            <nav>
              <ul className='grid clm4'>
                <li><Link to="/">All Notes</Link></li>
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/important">Important</Link></li>
                <li><Link to="/social">Social</Link></li>
                <button onClick={() => open()} className='btn-nav btn-3'>Add Notes <FontAwesomeIcon icon={faPlus} /></button>
              </ul>
            </nav>
          </header>
      }





    </>
  )
}
