import React from 'react'
import { Outlet } from 'react-router-dom'
import ChangeArrow from './ChangeArrow/ChangeArrow'

const Layout = (props) => {

  const {where,setWhere} = props;

  return (
    <div>
        <ChangeArrow where={where} setWhere={setWhere} />
        <Outlet />
    </div>
  )
}

export default Layout