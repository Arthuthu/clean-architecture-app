import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './site.css'
import UserDetail from './Components/Users/UserDetail'
import Layout from './Components/Shared/Layout'
import Users, { loader as usersLoader } from './Components/Users/Users'
import Home from './Components/Home'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path='/user/:id' element={<UserDetail />} />
    <Route path='/users' element={<Users />} loader={ usersLoader }/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  ) 
}

ReactDOM.createRoot(document.getElementById('root'))
.render(<App/>)
