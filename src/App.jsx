import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserCard from './components/UserCard.jsx'
import PostForm from './components/PostForm.jsx'

function App() {


  return (
    <>
      <UserCard />
      <div className='card-holder'>
        <PostForm />
      </div>
      <br /> <br /><br />
    </>
  )
}

export default App;
