import { useCallback } from 'react'
import { navBarItems } from '../data/navBar'

const navItemCssClasses = `
  nav-bar-item p-6 ml-2 mr-2 uppercase text-center
  transition-all ease-in-out duration-500
  hover:bg-orange-600 hover:cursor-pointer
`

const Navbar = ({ onClick }) => {
  const onItemClick = useCallback(
    (id) => onClick(id),
    [onClick]
  )

  return (
    <div className="nav-bar bg-sky-950 text-white">
      <div className="container mx-auto flex justify-end items-end flex-wrap">
        {navBarItems.map((item) => (
          <span
            key={item.id}
            className={navItemCssClasses}
            onClick={() => onItemClick(item.id)}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Navbar
