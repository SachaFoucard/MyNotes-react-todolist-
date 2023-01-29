import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Business from '../src/Pages/Business'
import Important from '../src/Pages/Important'
import Social from '../src/Pages/Social'
import NavBar from './Components/NavBar'
import NotesContextProvider from './Context/NotesContext'
import AllNotes from './Pages/AllNotes'
import './Styles/index.css'



export function App() {


  return (
    <>
      <NotesContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<AllNotes />} />
            <Route path='/business' element={<Business />} />
            <Route path='/important' element={<Important />} />
            <Route path='/social' element={<Social />} />
          </Routes>
        </BrowserRouter>
      </NotesContextProvider>
    </>
  )
}

export default App
