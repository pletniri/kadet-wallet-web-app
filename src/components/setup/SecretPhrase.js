import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function SecretPhrase() {
  return (
    <div className='bg-[#F4F2EE]/[0.2] rounded-xl pt-4 pb-8 px-11 flex flex-col gap-5 justify-center items-center'>
        <h3 className='font-medium text-base'>Create a new Secret Phrase</h3>
        <Link to='/crea' className='bg-gradient-to-r from-[#E4FC70] to-[#9AECA4] py-3 px-10 rounded-full text-[#37393F] font-semibold text-base'>CREATE A WALLET</Link>
    </div>
  )
}

export default SecretPhrase