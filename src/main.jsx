import React, { useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './site.css'
import UserDetail from './Components/Users/UserDetail'
import Layout from './Components/Layout'
import Users from './Components/Users/Users'
import GetAllUsers from './Services/UserService'

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
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
            const users = await GetAllUsers();
            setUserList(users);
            console.log(users);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
  }, []);

  return(
    <>
      <div>List of Users</div>
      <ul>
        {userList.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root'))
.render(<App/>)
