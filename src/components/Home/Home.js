import React from 'react';
import Header from './Header/Header';
import Hero from './Home/index';
import ContactPageSection from './../Contact/index'
import Footer from './Footer/Footer';
import Search from '../StaffStructure/SearchStaff';
import EmployeeStructure from '../StaffStructure/staff/index'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ContactPageSection/>
      <EmployeeStructure/>
      <Search/>
      <Footer />
      
    </div>
  );
};

export default Home;
