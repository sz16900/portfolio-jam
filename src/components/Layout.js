import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setisOpen] = React.useState(false);
  const toggleSidebar=()=>{
    setisOpen(!isOpen);
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar  isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      {children}
      <Footer />
    </>
  )
}

export default Layout
