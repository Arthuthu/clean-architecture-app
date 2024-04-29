import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './site.css'
import UserDetail from './Components/Users/UserDetail'
import Layout from './Components/Shared/Layout'
import Users, { loader as usersLoader } from './Components/Users/Users'
import Home, { loader as homeLoader } from './Components/Home'
import Error from './Components/Shared/Error'
import CreateUser from './Components/Users/CreateUser'
import { action as createUserAction } from './Components/Users/CreateUser'
import Login from './Components/Login/Login'
import { action as loginAction, loader as loginLoader } from './Components/Login/Login'
import Logout, { loader as logoutLoader } from './Components/Logout'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} loader={ homeLoader } errorElement={<Error />} />
    <Route path='user/:id' element={<UserDetail />} errorElement={<Error />} />
    <Route path='users' element={<Users />} loader={ usersLoader } errorElement={<Error />} />
    <Route path='user/create' element={<CreateUser />} action={ createUserAction } errorElement={<Error />} />
    <Route path='login' element={<Login />} loader={ loginLoader } action={ loginAction } errorElement={<Error />} />
    <Route path='logout' element={<Logout />} loader={ logoutLoader } errorElement={<Error />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  ) 
}

ReactDOM.createRoot(document.getElementById('root'))
.render(<App/>)