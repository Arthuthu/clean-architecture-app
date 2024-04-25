import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import UserDetail from './Components/Users/UserDetail'
import Layout from './Components/Shared/Layout'
import Users, { loader as usersLoader } from './Components/Users/Users'
import Home from './Components/Home'
import Error from './Components/Shared/Error'
import CreateUser from './Components/Users/CreateUser'

import './site.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} errorElement={<Error />} />
    <Route path='/user/:id' element={<UserDetail />} errorElement={<Error />} />
    <Route path='/users' element={<Users />} loader={ usersLoader } errorElement={<Error />} >
      <Route path='/users/create' element={<CreateUser />} errorElement={<Error />} />
    </Route>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  ) 
}

ReactDOM.createRoot(document.getElementById('root'))
.render(<App/>)