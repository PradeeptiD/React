import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './profileCard'
import './profileCard.css'

function App() {
  const user = {
    name: "Taylor Swift",
    profession: "Singer/Songwriter",
    description: "Taylor Swift is a Grammy-winning singer-songwriter known for her storytelling, genre versatility, and global impact.",
    youtube: "https://www.youtube.com/user/taylorswift",
    instagram: "https://www.instagram.com/taylorswift",
    x: "https://x.com/taylorswift13"
  }
  
  return (
    <>
      <ProfileCard user={user} />
    </>
    )
}

export default App
