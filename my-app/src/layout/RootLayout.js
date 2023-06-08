import Navbar from "../component/Navbar"

const RootLayout = ({ children, onNavClick }) => (
  <div className="root-layout">
    <Navbar onClick={onNavClick} />
    {children}
  </div>
)

export default RootLayout
