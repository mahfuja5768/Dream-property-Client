/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
  const [isActive, setActive] = useState(false);
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:text-gray-700 ${
          isActive ? 'text-primary' : 'text-gray-700'
        }`
      }
    >
      <Icon className='w-5 h-5' />

      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
  )
}

export default MenuItem