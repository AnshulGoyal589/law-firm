import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

// Import shared components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LegalSolutionsPage from './Pages/LegalSolutionsPage';
import BizBaseLegalPage from './Pages/BizBaseLegalPage';
import HomePage from './Pages/HomePage';


// This is a helper component to scroll to the top of the page on navigation
const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/legal-solutions" element={<LegalSolutionsPage />} />
          <Route path="/biz-base-legal" element={<BizBaseLegalPage />} />
        </Routes>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default App;