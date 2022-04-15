import React from "react"
import socialLinks from "../../constants/social_links"

// styles
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links social-links">
        {socialLinks.map(link => {
          return (
            <a
              href={link.url}
              target="_blank"
              className="social-link"
              key={link.id}
            >
              {link.icon}
            </a>
          )
        })}
      </div>
      <h4>
        copyright &copy; {new Date().getFullYear()}
        <span> WebDev</span> All Rights Reserved
      </h4>
    </footer>
  )
}

export default Footer
