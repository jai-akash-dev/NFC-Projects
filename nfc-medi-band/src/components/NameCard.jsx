import React from 'react'
import profilePic from '../assets/profile-pic-1.jpg'
import './styles/styles.css'

export default function NameCard() {
  return (
    <div className='nameCard' >
      <img className='profile-pic' src={profilePic} alt="Profile pic"  />
      <h2>Dr. Avinesh</h2>
      <p>[ Retired Professor ]</p>
    </div>
  )
}
