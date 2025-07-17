import React from 'react'
import WTD1 from './WTD1'
import WTD2 from './WTD2'
import WTD3 from './WTD3'
import WTD4 from './WTD4'
import WTDAdd from './WTDAdd'


export default function WhatToDo() {
  return (
    <div className=' wdtMain card' >
        <h3>What to Do in Case of Emergency</h3>
        <p className='italicSub' >(Doctor’s Instructions for First Responders & Caregivers)</p>
        <WTD1 />
        <WTD2 />
        <WTD3 />
        <WTD4 />
        <WTDAdd />
    </div>
  )
}
