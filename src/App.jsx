import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Page Components
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import TherapyServices from './pages/TherapyServices'
import ForFamilies from './pages/ForFamilies'
import GetInvolved from './pages/GetInvolved'
import ContactUs from './pages/ContactUs'

import IntensivePhysicalTherapy from './pages/therapy/IntensivePhysicalTherapy'
import TraditionalPhysicalTherapy from './pages/therapy/TraditionalPhysicalTherapy'
import TherapySchedule from './pages/therapy/TherapySchedule'

import GettingStarted from './pages/families/GettingStarted'
import PatientInformation from './pages/families/PatientInformation'
import FreeConsultation from './pages/families/FreeConsultation'
import Accommodations from './pages/families/Accommodations'
import WhereToStay from './pages/families/WhereToStay'
import LocalActivities from './pages/families/LocalActivities'

import Donate from './pages/involved/Donate'
import VolunteerOpportunities from './pages/involved/VolunteerOpportunities'
import OurDonors from './pages/involved/OurDonors'

// New Consolidated Pages
import OurStoryMission from './pages/about/OurStoryMission'
import OurTeam from './pages/about/OurTeam'
import SimpleLocations from './pages/about/SimpleLocations'
import ConsolidatedTreatmentMethods from './pages/therapy/ConsolidatedTreatmentMethods'
import FinancialSupport from './pages/families/FinancialSupport'
import FamilyResources from './pages/families/FamilyResources'

function App() {
  return (
    <Router basename="/nowican">
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/therapy-services" element={<TherapyServices />} />
            <Route path="/for-families" element={<ForFamilies />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/support-us" element={<GetInvolved />} />
            <Route path="/contact-us" element={<ContactUs />} />
            
            {/* About Us - Consolidated Pages */}
            <Route path="/about-us/our-story-mission" element={<OurStoryMission />} />
            <Route path="/about-us/our-team" element={<OurTeam />} />
            <Route path="/about-us/locations" element={<SimpleLocations />} />
            
            {/* Therapy Services - Consolidated Pages */}
            <Route path="/therapy-services/intensive-physical-therapy" element={<IntensivePhysicalTherapy />} />
            <Route path="/therapy-services/traditional-physical-therapy" element={<TraditionalPhysicalTherapy />} />
            <Route path="/therapy-services/therapy-schedule" element={<TherapySchedule />} />
            <Route path="/therapy-services/treatment-methods" element={<ConsolidatedTreatmentMethods />} />
            
            {/* For Families - Consolidated Pages */}
            <Route path="/for-families/getting-started" element={<GettingStarted />} />
            <Route path="/for-families/getting-started/free-consultation" element={<FreeConsultation />} />
            <Route path="/for-families/getting-started/patient-information" element={<PatientInformation />} />
            <Route path="/for-families/financial-support" element={<FinancialSupport />} />
            <Route path="/for-families/accommodations" element={<Accommodations />} />
            <Route path="/for-families/accommodations/where-to-stay" element={<WhereToStay />} />
            <Route path="/for-families/accommodations/local-activities" element={<LocalActivities />} />
            <Route path="/for-families/family-resources" element={<FamilyResources />} />
            
            {/* Get Involved/Support Us Pages */}
            <Route path="/get-involved/donate" element={<Donate />} />
            <Route path="/get-involved/volunteer-opportunities" element={<VolunteerOpportunities />} />
            <Route path="/get-involved/our-donors" element={<OurDonors />} />
            <Route path="/support-us/donate" element={<Donate />} />
            <Route path="/support-us/volunteer" element={<VolunteerOpportunities />} />
            <Route path="/support-us/our-supporters" element={<OurDonors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
