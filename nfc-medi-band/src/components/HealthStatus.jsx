import React from 'react'

export default function HealthStatus() {
  return (
    <div className=' healthstatus card'>
      <div className="stat1">Age<br/><span className='agen' >67 yrs</span><br/><i class="fa-regular fa-calendar aicon "></i></div>
      <div className="stat2">Blood Group<br/><span className='bgroup' ><i class="fa-solid fa-droplet bicon "></i> B<span className='bve'>+ve</span></span><br/></div>
      <div className="stat3">Cardiac Patient<br/><i class="fa-solid fa-heart-pulse hicon "></i></div>  
    </div>
  )
}
