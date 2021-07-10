import React from "react"
import "./topnav.css"
import { Link } from "react-router-dom"

import Dropdown from "components/Dropdown"
import ThemeMenu from "components/ThemeMenu"
import notifications from "assets/JsonData/notification.json"
import user_image from "assets/images/tuat.png"
import user_menu from "assets/JsonData/user_menus.json"

const curr_user = {
  display_name: "Le Nhan",
  image: user_image,
}

const renderNotification = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
)

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt={user.display_name} />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
)

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
)

const index = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" className="" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* Dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          {/* Dropdown here */}
          <Dropdown
            icon="bx bx-bell"
            badge={14}
            contentData={notifications}
            renderItems={(item, index) => renderNotification(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          {/* Theme settings here */}
          <ThemeMenu />
        </div>
      </div>
    </div>
  )
}

export default index
