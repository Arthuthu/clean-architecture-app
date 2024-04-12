import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './site.css'
import UserDetail from './Components/Users/UserDetail'
import Layout from './Components/Layout'
import Users from './Components/Users/Users'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/user/:id' element={<UserDetail />} />
          <Route path='/users' element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
}

function Home() {
  return(
    <>
      <div>This is the main page content</div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root'))
.render(<App/>)
