import React from 'react'

export default function SectionHeader({
  text,
  brief,
}: {
  text: string
  brief: string
}) {
  return (
    <div dir='rtl' className='text-center grid gap-3 mt-5 px-4'>
      <h3 className='text-4xl md:text-7xl font-bold'>{text}</h3>
      <p className='text-xl md:text-3xl'>{brief}</p>
    </div>
  )
}
