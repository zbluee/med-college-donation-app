import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home-page';
import DonationPage from './pages//donation/donation-page';
import DonationHistoryPage from './pages/donation-history/donation-history';
import VolunteerOpportunitiesPage from './pages/volunteer-opportunities-page/volunteer-opportunities-page';
import AboutUsPage from './pages/about-us-page/about-us-page';
import FAQPage from './pages/faq-page/faq-page';
import ContactUsPage from './pages/contact-us-page/contact-us-page';
import NotFoundPage from './pages/not-found/not-found';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return (
    <div className="app-container" >
    <Header/>
    <div className="main-content ">
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/donate" element={<DonationPage/>} />
        <Route path="/donation-history" element={<DonationHistoryPage/>} />
        <Route path="/volunteer-opportunities" element={<VolunteerOpportunitiesPage/>} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path="/faq" element={<FAQPage/>} />
      <Route path="/contact-us" element={<ContactUsPage/>} /> 
      <Route path="*" element={<NotFoundPage/>} /> 
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
