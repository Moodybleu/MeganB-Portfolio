import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.Home}
      </Link>
      <Link to="/about" className="navigation-links-navlink1">
        {props.About}
      </Link>
      <Link to="/past-project" className="navigation-links-navlink2">
        {props.PastProjects}
      </Link>
      <Link to="/current-projects" className="navigation-links-navlink3">
        {props.CurrentProjects}
      </Link>
      <Link to="/contact" className="navigation-links-navlink4">
        {props.Contact}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  Contact: 'Contact',
  About: 'About',
  link_text: 'https://example.com',
  rootClassName: '',
  Home: 'Home',
  PastProjects: 'Past Projects',
  CurrentProjects: 'Current Projects',
}

NavigationLinks.propTypes = {
  Contact: PropTypes.string,
  About: PropTypes.string,
  link_text: PropTypes.string,
  rootClassName: PropTypes.string,
  Home: PropTypes.string,
  PastProjects: PropTypes.string,
  CurrentProjects: PropTypes.string,
}

export default NavigationLinks
