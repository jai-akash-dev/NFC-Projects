import React from 'react'

export default function Socials() {
  const phoneNumber = "+917358239682";
  return (
    <div className='socials card' >
      <h2>Socials</h2>
      <div className='iconContainer' >
      <a href="https://www.linkedin.com/in/jenhsunhuang" target='_blank' rel="noopener noreferrer" ><i class="fa-brands fa-linkedin-in "></i></a>
      <a href="https://x.com/elonmusk" target='_blank' rel="noopener noreferrer" ><i class="fa-brands fa-x-twitter "></i></a>
      <a href="https://www.instagram.com/_._kxrthi_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' rel="noopener noreferrer" ><i class="fa-brands fa-instagram"></i></a>
      <a href={`https://wa.me/${phoneNumber.replace("+", "")}`} target='_blank' rel="noopener noreferrer" ><i class="fa-brands fa-whatsapp "></i></a>
      <a href="mailto:email@example.com" target='_blank' rel="noopener noreferrer" ><i class="fa-regular fa-envelope "></i></a>
      {/* <i class="fa-brands fa-youtube"></i> */}
      </div>
    </div>
  )
}
