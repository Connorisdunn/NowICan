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

// Original Sub-page Components
import OurStory from './pages/about/OurStory'
import Locations from './pages/about/Locations'
import UtahLocation from './pages/about/UtahLocation'
import PennsylvaniaLocation from './pages/about/PennsylvaniaLocation'

import IntensivePhysicalTherapy from './pages/therapy/IntensivePhysicalTherapy'
import TraditionalPhysicalTherapy from './pages/therapy/TraditionalPhysicalTherapy'
import TreatmentMethods from './pages/therapy/TreatmentMethods'
import TherapySchedule from './pages/therapy/TherapySchedule'

import GettingStarted from './pages/families/GettingStarted'
import PatientInformation from './pages/families/PatientInformation'
import FreeConsultation from './pages/families/FreeConsultation'
import PaymentFinancialAid from './pages/families/PaymentFinancialAid'
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
    <Router>
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
            <Route path="/support-us" element={<GetInvolved />} /> {/* Renamed route */}
            <Route path="/contact-us" element={<ContactUs />} />
            
            {/* About Us Sub-pages - Original */}
            <Route path="/about-us/our-story" element={<OurStory />} />
            <Route path="/about-us/mission-values" element={<Navigate to="/about-us/our-story-mission" replace />} />
            <Route path="/about-us/therapy-team" element={<Navigate to="/about-us/our-team" replace />} />
            <Route path="/about-us/board-of-directors" element={<Navigate to="/about-us/our-team" replace />} />
            <Route path="/about-us/locations" element={<Locations />} />
            <Route path="/about-us/locations/utah" element={<UtahLocation />} />
            <Route path="/about-us/locations/pennsylvania" element={<PennsylvaniaLocation />} />
            
            {/* About Us Sub-pages - New Consolidated */}
            <Route path="/about-us/our-story-mission" element={<OurStoryMission />} />
            <Route path="/about-us/our-team" element={<OurTeam />} />
            <Route path="/about-us/simple-locations" element={<SimpleLocations />} />
            
            {/* Therapy Services Sub-pages - Original */}
            <Route path="/therapy-services/intensive-physical-therapy" element={<IntensivePhysicalTherapy />} />
            <Route path="/therapy-services/traditional-physical-therapy" element={<TraditionalPhysicalTherapy />} />
            <Route path="/therapy-services/treatment-methods" element={<TreatmentMethods />} />
            <Route path="/therapy-services/therapy-schedule" element={<TherapySchedule />} />
            <Route path="/therapy-services/treatment-methods/orthotic-suit-therapy" element={<Navigate to="/therapy-services/consolidated-treatment-methods" replace />} />
            <Route path="/therapy-services/treatment-methods/universal-exercise-unit" element={<Navigate to="/therapy-services/consolidated-treatment-methods" replace />} />
            <Route path="/therapy-services/treatment-methods/manual-therapy" element={<Navigate to="/therapy-services/consolidated-treatment-methods" replace />} />
            <Route path="/therapy-services/treatment-methods/functional-estim" element={<Navigate to="/therapy-services/consolidated-treatment-methods" replace />} />
            <Route path="/therapy-services/treatment-methods/full-body-vibration" element={<Navigate to="/therapy-services/consolidated-treatment-methods" replace />} />
            <Route path="/therapy-services/treatment-methods/additional-techniques" element={<Navigate to="/therapy-services/consolidated-treatment-methods" replace />} />
            
            {/* Therapy Services Sub-pages - New Consolidated */}
            <Route path="/therapy-services/consolidated-treatment-methods" element={<ConsolidatedTreatmentMethods />} />
            
            {/* For Families Sub-pages - Original */}
            <Route path="/for-families/getting-started" element={<GettingStarted />} />
            <Route path="/for-families/getting-started/patient-information" element={<PatientInformation />} />
            <Route path="/for-families/getting-started/free-consultation" element={<FreeConsultation />} />
            <Route path="/for-families/therapy-schedule" element={<TherapySchedule />} />
            <Route path="/for-families/payment-financial-aid" element={<PaymentFinancialAid />} />
            <Route path="/for-families/payment-financial-aid/payment-options" element={<Navigate to="/for-families/financial-support" replace />} />
            <Route path="/for-families/payment-financial-aid/therapy-grants" element={<Navigate to="/for-families/financial-support" replace />} />
            <Route path="/for-families/accommodations" element={<Accommodations />} />
            <Route path="/for-families/accommodations/where-to-stay" element={<WhereToStay />} />
            <Route path="/for-families/accommodations/local-activities" element={<LocalActivities />} />
            <Route path="/for-families/testimonials" element={<Navigate to="/for-families/family-resources" replace />} />
            <Route path="/for-families/faqs" element={<Navigate to="/for-families/family-resources" replace />} />
            
            {/* For Families Sub-pages - New Consolidated */}
            <Route path="/for-families/financial-support" element={<FinancialSupport />} />
            <Route path="/for-families/family-resources" element={<FamilyResources />} />
            
            {/* Get Involved Sub-pages */}
            <Route path="/get-involved/donate" element={<Donate />} />
            <Route path="/get-involved/volunteer-opportunities" element={<VolunteerOpportunities />} />
            <Route path="/get-involved/our-donors" element={<OurDonors />} />
            
            {/* Support Us Sub-pages (renamed from Get Involved) */}
            <Route path="/support-us/donate" element={<Donate />} />
            <Route path="/support-us/volunteer" element={<VolunteerOpportunities />} />
            <Route path="/support-us/our-supporters" element={<OurDonors />} />
            
            {/* Contact Us Sub-pages */}
            <Route path="/contact-us/free-consultation" element={<Navigate to="/for-families/getting-started/free-consultation" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
