import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Earn from './pages/Earn'; // Make sure this is the correct path
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './pages/Cart';



const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} /> 
            <Route path="/contactus" element={<ContactUs />} /> 
            <Route path="/earn" element={<Earn />} /> 
            <Route path="/cart" element={<Cart />} /> 


          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
