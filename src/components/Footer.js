import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
  <footer className="footer">
    <div className="">
      <SocialLinks className="footer-links"></SocialLinks>
      <h4>copyright&copy;{new Date().getFullYear()}</h4>
    </div>
  </footer>)
}

export default Footer
