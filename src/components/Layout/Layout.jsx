import React, { useEffect } from "react"
import "./layout.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import Sidebar from "components/Sidebar"
import TopNav from "components/TopNav"
import Routes from "components/Routes"
import ThemeAction from "redux/actions/ThemeAction"

const Layout = (props) => {
  const themeReducer = useSelector((state) => state.ThemeReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light")

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light")
    dispatch(ThemeAction.setMode(themeClass))
    dispatch(ThemeAction.setColor(colorClass))
  }, [dispatch])

  return (
    <Router>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar {...props} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </Router>
  )
}

export default Layout
