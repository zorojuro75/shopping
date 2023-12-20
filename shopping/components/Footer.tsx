import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-slate-900 text-white text-xl'>
        <div className='h-[80px] max-w-7xl mx-auto my-2 grid grid-cols-3 place-content-center place-items-center'>
            <div>Footer</div>
            <div>Footer</div>
            <div>Footer</div>
        </div>
    </div>
  )
}

export default Footer