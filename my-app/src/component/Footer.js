import React, { useState } from 'react'
import * as IoIcons from 'react-icons/io'
import { socialItems } from '../data/social'

const socialIconCssClasses = `
  flex justify-center items-center
  p-4 ml-3 mr-3 rounded-full bg-gray-100 drop-shadow-none
  transition-all ease-in-out duration-300
  hover:cursor-pointer hover:drop-shadow-xl hover:text-white hover:bg-gray-50
`

const SocialIcon = ({ Icon, color }) => {
  const [_color, setColor] = useState('rgb(107 114 128)')

  return (
    <div
      className={socialIconCssClasses}
      onMouseEnter={() => setColor(color)}
      onMouseLeave={() => setColor('rgb(107 114 128)')}
    >
      <Icon size={28} color={_color} />
    </div>
  )
}

const Footer = ({ forwardRef }) => {
  return (
    <footer className="container mx-auto p-6 flex justify-end items-end text-sky-950">
      {socialItems.map((item) => (
        <SocialIcon
          key={item.id}
          Icon={IoIcons[item.icon]}
          color={item.color}
        />
      ))}
    </footer>
  )
}

export default Footer
