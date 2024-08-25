// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { AuthContextProvider } from './Context/AuthContext'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Account from './Pages/Account'
import ProtectedRoute from './Components/ProtectedRoute'

const App = () => {
  return (
    <div>
    <AuthContextProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route
        path='/account'
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />
    </Routes>
  </AuthContextProvider>
    </div>
  )
}

export default App
