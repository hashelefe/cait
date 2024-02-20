import React from 'react'

const Header = ({title,subtitle}: {title: String, subtitle?: String}) => {
  return (
    <>
        <h2 className='h2-bold text-dark-700'>{title}</h2>
        {subtitle && <p className='p-16-regular mt-4 text-dark-500'>{subtitle}</p> }
    </>
  )
}

export default Header