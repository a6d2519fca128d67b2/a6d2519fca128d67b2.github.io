import React from "react"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"

const RootLayout = ({ children, onNavClick }) => (
  <div className="root-layout antialiased">
    <Navbar onClick={onNavClick} />
    {children}
    <Footer />
  </div>
)

export default RootLayout
