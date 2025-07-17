import React from 'react'

export default function CallMsgBtn() {
  const phoneNumber = "+917358239682";
  return (
    <div className='callmsgbtn card' >
      <a
        href={`tel:${phoneNumber}`}
        className="bg-green-500 text-white px-6 py-3 rounded-md w-full text-center"
      ><button className='callbtn' ><i class="fa-solid fa-phone"></i> Call on Emergency</button></a>
      <a
        href={`https://wa.me/${phoneNumber.replace("+", "")}`} // WhatsApp format
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-6 py-3 rounded-md w-full text-center"
      ><button className='msgbtn' ><i class="fa-brands fa-whatsapp"></i> Share Location</button></a>

    </div>
  )
}
