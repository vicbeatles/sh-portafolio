import React from 'react'
import { Outlet } from 'react-router-dom'
import ChangeArrow from './ChangeArrow/ChangeArrow'

const Layout = () => {
  return (
    <div>
        <ChangeArrow />
        <Outlet />
    </div>
  )
}

export default Layout