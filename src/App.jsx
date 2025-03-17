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

// Sub-page Components
import OurStory from './pages/about/OurStory'
import MissionValues from './pages/about/MissionValues'
import TherapyTeam from './pages/about/TherapyTeam'
import BoardOfDirectors from './pages/about/BoardOfDirectors'
import Locations from './pages/about/Locations'
import UtahLocation from './pages/about/UtahLocation'
import PennsylvaniaLocation from './pages/about/PennsylvaniaLocation'
import WhoWeServe from './pages/about/WhoWeServe'

import IntensivePhysicalTherapy from './pages/therapy/IntensivePhysicalTherapy'
import TraditionalPhysicalTherapy from './pages/therapy/TraditionalPhysicalTherapy'
import TreatmentMethods from './pages/therapy/TreatmentMethods'
import TherapySchedule from './pages/therapy/TherapySchedule'
import OrthoticSuitTherapy from './pages/therapy/OrthoticSuitTherapy'
import UniversalExerciseUnit from './pages/therapy/UniversalExerciseUnit'
import ManualTherapy from './pages/therapy/ManualTherapy'
import FunctionalEStim from './pages/therapy/FunctionalEStim'
import FullBodyVibration from './pages/therapy/FullBodyVibration'
import AdditionalTechniques from './pages/therapy/AdditionalTechniques'

import GettingStarted from './pages/families/GettingStarted'
import PatientInformation from './pages/families/PatientInformation'
import FreeConsultation from './pages/families/FreeConsultation'
import PaymentFinancialAid from './pages/families/PaymentFinancialAid'
import PaymentOptions from './pages/families/PaymentOptions'
import TherapyGrants from './pages/families/TherapyGrants'
import Accommodations from './pages/families/Accommodations'
import WhereToStay from './pages/families/WhereToStay'
import LocalActivities from './pages/families/LocalActivities'
import Testimonials from './pages/families/Testimonials'
import FAQs from './pages/families/FAQs'

import Donate from './pages/involved/Donate'
import VolunteerOpportunities from './pages/involved/VolunteerOpportunities'
import OurDonors from './pages/involved/OurDonors'

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
            <Route path="/contact-us" element={<ContactUs />} />
            
            {/* About Us Sub-pages */}
            <Route path="/about-us/our-story" element={<OurStory />} />
            <Route path="/about-us/mission-values" element={<MissionValues />} />
            <Route path="/about-us/therapy-team" element={<TherapyTeam />} />
            <Route path="/about-us/board-of-directors" element={<BoardOfDirectors />} />
            <Route path="/about-us/locations" element={<Locations />} />
            <Route path="/about-us/locations/utah" element={<UtahLocation />} />
            <Route path="/about-us/locations/pennsylvania" element={<PennsylvaniaLocation />} />
            <Route path="/about-us/who-we-serve" element={<WhoWeServe />} />
            
            {/* Therapy Services Sub-pages */}
            <Route path="/therapy-services/intensive-physical-therapy" element={<IntensivePhysicalTherapy />} />
            <Route path="/therapy-services/traditional-physical-therapy" element={<TraditionalPhysicalTherapy />} />
            <Route path="/therapy-services/who-we-serve" element={<WhoWeServe />} />
            <Route path="/therapy-services/treatment-methods" element={<TreatmentMethods />} />
            <Route path="/therapy-services/therapy-schedule" element={<TherapySchedule />} />
            <Route path="/therapy-services/treatment-methods/orthotic-suit-therapy" element={<OrthoticSuitTherapy />} />
            <Route path="/therapy-services/treatment-methods/universal-exercise-unit" element={<UniversalExerciseUnit />} />
            <Route path="/therapy-services/treatment-methods/manual-therapy" element={<ManualTherapy />} />
            <Route path="/therapy-services/treatment-methods/functional-estim" element={<FunctionalEStim />} />
            <Route path="/therapy-services/treatment-methods/full-body-vibration" element={<FullBodyVibration />} />
            <Route path="/therapy-services/treatment-methods/additional-techniques" element={<AdditionalTechniques />} />
            
            {/* For Families Sub-pages */}
            <Route path="/for-families/getting-started" element={<GettingStarted />} />
            <Route path="/for-families/getting-started/patient-information" element={<PatientInformation />} />
            <Route path="/for-families/getting-started/free-consultation" element={<FreeConsultation />} />
            <Route path="/for-families/therapy-schedule" element={<TherapySchedule />} />
            <Route path="/for-families/payment-financial-aid" element={<PaymentFinancialAid />} />
            <Route path="/for-families/payment-financial-aid/payment-options" element={<PaymentOptions />} />
            <Route path="/for-families/payment-financial-aid/therapy-grants" element={<TherapyGrants />} />
            <Route path="/for-families/accommodations" element={<Accommodations />} />
            <Route path="/for-families/accommodations/where-to-stay" element={<WhereToStay />} />
            <Route path="/for-families/accommodations/local-activities" element={<LocalActivities />} />
            <Route path="/for-families/testimonials" element={<Testimonials />} />
            <Route path="/for-families/faqs" element={<FAQs />} />
            
            {/* Get Involved Sub-pages */}
            <Route path="/get-involved/donate" element={<Donate />} />
            <Route path="/get-involved/volunteer-opportunities" element={<VolunteerOpportunities />} />
            <Route path="/get-involved/our-donors" element={<OurDonors />} />
            
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
