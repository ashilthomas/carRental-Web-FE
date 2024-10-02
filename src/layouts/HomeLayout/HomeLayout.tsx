import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import HeaderSlider from '../../components/Header/HeaderSlider'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
    const [open, setOpen] = useState<boolean>(true)
    
  return (
    <div>
       <Header open={open} setOpen={setOpen} />
        <HeaderSlider open={open} setOpen={setOpen}/>
          <Outlet/>
    </div>
  )
}

export default HomeLayout