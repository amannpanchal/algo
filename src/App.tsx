import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Mylikes from './Pages/Mylikes'
import MyProfile from './Pages/MyProfile'
import Mybookmarks from './Pages/Mybookmarks'
import Myposts from './Pages/Myposts'

const App = () => {
  return (
    <>
    <Routes>
      <Route path = "/login" element ={<Login/>}/>
      <Route path = "/signup" element ={<Signup/>}/>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/mylikes" element= {<Mylikes/>}/>
      <Route path= "/myprofile" element = {<MyProfile/>}/>
      <Route path = "/mybookmark" element = {<Mybookmarks/>}/>
      <Route path = "/myposts" element = {<Myposts/>}/>

      
    </Routes>




    
    
    
    </>
  )
}

export default App