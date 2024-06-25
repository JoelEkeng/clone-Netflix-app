import React from 'react'

interface DropdownProps {
    label: string;
    text: string;
}
function Dropdown( {label, text}: DropdownProps) {
  return (
    <>
    
    <h1 className='bg-neutral-700 w-150 h-16 text-2xl'>{label}</h1>
    <p className='bg-neutral-700 w-150 text-2xl'>{text}</p>
    
    </>
   
  )
}

export default Dropdown