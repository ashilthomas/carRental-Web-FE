import React from 'react'
import HeroCarousel from '../../components/HeroSection/HeroSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import CarRentalForm from '../../components/Booking/Booking'
import Carousel from '../../components/Categories/Categories'
import Brands from '../../components/Brands/Brands'
import Footer from '../../components/Footer/Footer'
import CarFleet from '../../components/CarFleet/CarFleet'

import UserManagement from '../../components/Admins/AdminUserMangement/UserManagement'
import DashBoard from '../../components/Admins/DashBoard/DashBoard'
import BarChart from '../../components/BarChart/BarChart'
import AllBookedVehicle from '../../components/Admins/AllBookedVehicle/AllBookedVehicle'
import DeleteModel from '../../components/DeleteModel/DeleteModel'

  // Sample data for the chart



function HomePages() {
  return (
    <div>
        <HeroCarousel/>
        <AboutSection/>
          <CarRentalForm/>
          <Carousel/>
          <CarFleet/>
          <Brands/>
          <Footer/>
        
          {/* <AllBookedVehicle/> */}
         
        
         
       
         
       

         
        
           
   

    </div>
  )
}

export default HomePages