import React from 'react'
import HeroCarousel from '../../components/HeroSection/HeroSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import CarRentalForm from '../../components/Booking/Booking'
import Carousel from '../../components/Categories/Categories'
import Brands from '../../components/Brands/Brands'
import Footer from '../../components/Footer/Footer'
import CarFleet from '../../components/CarFleet/CarFleet'
import AddVehicle from '../../components/Admins/AddCars/AddVehicle'
import AdminHeader from '../../components/Admins/AdminHeader/AdminHeader'
import AllVechicles from '../../components/Admins/AllVehicles/AllVechicles'
import UserManagement from '../../components/Admins/AdminUserMangement/UserManagement'





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
          <UserManagement/>
         
       
         
       

         
        
           
   

    </div>
  )
}

export default HomePages