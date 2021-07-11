import React, { useState } from "react"
import "./sidebar.scss"

// import logo from "assets/images/logo.png"

import sidebar_items from "assets/JsonData/sidebar_routes.json"
import { Link } from "react-router-dom"

const SidebarItem = (props) => {
  const active = props.active ? "active" : ""
  const className = props.className || ""

  return (
    <div className={`sidebar__item ${className}`}>
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  )
}

const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  )
  const [toggleBar, setToggleBar] = useState(true)
  return (
    <div className={`sidebar ${toggleBar ? "active" : ""}`}>
      <div className="sidebar__logo">
        {/* <img className="" src={logo} alt="logo company" /> */}
        <h2>LOGO</h2>
      </div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
      <div onClick={() => setToggleBar(!toggleBar)}>
        <SidebarItem
          className="sidebar__hide"
          title="Hide Bar"
          icon="bx bx-menu"
        />
      </div>
    </div>
  )
}

export default Sidebar
