/* eslint-disable prettier/prettier */
import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { Outlet } from 'react-router-dom'
import "../main/dashboard.css"
import Home from '../pages/Home'
import Settings from '../pages/Settings'
import ChatNew from '../pages/ChatNew'
import Group from '../pages/Group'
import Chat from '../pages/Chat'
import ChatDetail from '../pages/ChatDetail'
import Feedback from '../pages/Feedback'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="content">
          <Outlet />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
