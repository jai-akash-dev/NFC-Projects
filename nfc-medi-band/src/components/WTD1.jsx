import React from 'react'

export default function WTD1() {
  return (
    <div className='subCard' >
      <h4>1️⃣ If Patient Feels Chest Pain or Discomfort</h4>
      {/* <ul>
        <li>✔️ Step 1: Help the patient sit down and keep them calm.</li>
        <li>✔️ Step 2: Give 1 tablet of Aspirin (325mg) if not allergic.</li>
        <li>✔️ Step 3: Allow the patient to take Nitroglycerin (0.3mg-0.6mg) under the tongue if prescribed.</li>
        <li>✔️ Step 4: If pain persists for more than 5 minutes, call emergency services immediately (108 / 102 in India).</li>
      </ul> */}
        <p className='wdtSteps' ><span>Step 1:</span> Help the patient sit down and keep them calm.<br/>
          <span>Step 2:</span> Give 1 tablet of Aspirin (325mg) if not allergic.<br/>
          <span>Step 3:</span> Allow the patient to take Nitroglycerin (0.3mg-0.6mg) under the tongue if prescribed.<br/>
          <span>Step 4:</span> If pain persists for more than 5 minutes, call emergency services immediately (108 / 102 in India).
        </p>
    </div>
  )
}
