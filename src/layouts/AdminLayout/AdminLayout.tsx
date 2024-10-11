import React from 'react'
import AdminHeader from '../../components/Admins/AdminHeader/AdminHeader'
import { Outlet } from 'react-router-dom'
import AdminSlider from '../../components/Admins/AdminSlider/AdminSlider'


function AdminLayout() {
  return (
    <div>
  
         <AdminHeader/>
   
       <Outlet/>

  

    </div>
  )
}

export default AdminLayout

