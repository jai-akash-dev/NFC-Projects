import React from 'react'
import profilePic from '../assets/profile-pic-1.jpeg'
import './styles/styles.css'

export default function NameCard() {
  return (
    <div className='nameCard' >
      <img className='profile-pic' src={profilePic} alt="Profile pic"  />
      <h2>Jonathan Carter</h2>
      <p>( UI/UX Designer & Web Developer )</p>
    </div>
  )
}
