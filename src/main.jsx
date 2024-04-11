import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div>Hello world</div>
    </>
  ) 
}

function About() {
  return(
    <>
      <div>About page</div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>
)
