import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookAppointment from './components/BookAppointment';
import ViewAppointment from './components/ViewAppointment';
import TestHistory from './components/TestHistory';
import PatientPrescription from './components/PatientPrescription';
import DoctorAppointment from './components/DoctorAppointment';
import Sidebar from './components/Sidebar';
import AdminAddAppointment from './components/AdminAddAppointment';
import AdminViewAppointment from './components/AdminViewAppointment';
import AdminAddTimeSlot from './components/AdminAddTimeSlot';
import AdminAddDoctorFees from './components/AdminAddDoctorFees';
import AdminAddNewDoctor from './components/AdminAddNewDoctor';
import BMICalculator from './components/BMICalculator';

const App = () => {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" exact element={<BookAppointment />} />
          <Route path="/bmicalculator" exact element={<BMICalculator />} />
          <Route path="/bookappointment" element={<BookAppointment />} />
          <Route path="/viewappointment" element={<ViewAppointment />} />
          <Route path="/testhistory" element={<TestHistory />} />
          <Route path="/patientprescription" element={<PatientPrescription />} />
          <Route path="/doctorappointment" element={<DoctorAppointment />} />
          <Route path="/adminaddappointment" element={<AdminAddAppointment />} />
          <Route path="/adminviewappointment" element={<AdminViewAppointment />} />
          <Route path="/adminaddtimeslot" element={<AdminAddTimeSlot />} />
          <Route path="/adminadddoctorfees" element={<AdminAddDoctorFees />} />
          <Route path="/adminaddnewdoctor" element={<AdminAddNewDoctor />} />
        </Routes>
      </Sidebar>
    </Router>

    // <BMICalculator />
    // <BookAppointment />
    // <ProcessFaceRecognition />
    // <index />
    // <addFacePhoto />
  );
};

export default App;
