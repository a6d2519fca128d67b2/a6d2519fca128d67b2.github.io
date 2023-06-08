import './Navbar.css'

const Navbar = ({ onClick }) => (
  <div className="nav-bar">
    <span className='nav-bar-item' onClick={() => onClick('app-home')}>Home</span>
    <span className='nav-bar-item' onClick={() => onClick('app-about-us')}>About Us</span>
    <span className='nav-bar-item' onClick={() => onClick('app-contact')}>Contact</span>
    <span className='nav-bar-item' onClick={() => onClick('app-social')}>Social</span>
    <span className='nav-bar-item' onClick={() => onClick('app-feedback')}>Feeback</span>
  </div>
)

export default Navbar
