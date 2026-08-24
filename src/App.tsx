import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import GuidanceModal from './components/GuidanceModal';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Mauritius from './pages/Mauritius';
import MBBSAbroad from './pages/MBBSAbroad';
import Courses from './pages/Courses';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';

export default function App() {
  const [isGuidanceModalOpen, setIsGuidanceModalOpen] = useState(false);
  const [modalInitialDestination, setModalInitialDestination] = useState<string>('');
  const [modalInitialCourse, setModalInitialCourse] = useState<string>('');

  const handleOpenGuidanceModal = (destination = '', course = '') => {
    setModalInitialDestination(destination);
    setModalInitialCourse(course);
    setIsGuidanceModalOpen(true);
  };

  const handleCloseGuidanceModal = () => {
    setIsGuidanceModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-sans">
        
        {/* Navigation */}
        <Navbar onOpenGuidanceModal={() => handleOpenGuidanceModal()} />

        {/* Main Content Viewport */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenGuidanceModal={handleOpenGuidanceModal} />} />
            <Route path="/about" element={<About onOpenGuidanceModal={() => handleOpenGuidanceModal()} />} />
            <Route path="/destinations" element={<Destinations onOpenGuidanceModal={handleOpenGuidanceModal} />} />
            <Route path="/mauritius" element={<Mauritius onOpenGuidanceModal={handleOpenGuidanceModal} />} />
            <Route path="/mbbs-abroad" element={<MBBSAbroad onOpenGuidanceModal={handleOpenGuidanceModal} />} />
            <Route path="/courses" element={<Courses onOpenGuidanceModal={handleOpenGuidanceModal} />} />
            <Route path="/services" element={<Services onOpenGuidanceModal={() => handleOpenGuidanceModal()} />} />
            <Route path="/why-choose-us" element={<WhyChooseUs onOpenGuidanceModal={() => handleOpenGuidanceModal()} />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home onOpenGuidanceModal={handleOpenGuidanceModal} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenGuidanceModal={() => handleOpenGuidanceModal()} />

        {/* Global Floating Actions (WhatsApp, Call, Modal Trigger) */}
        <FloatingCTA onOpenGuidanceModal={() => handleOpenGuidanceModal()} />

        {/* Interactive Multi-step Career Guidance Modal */}
        <GuidanceModal
          isOpen={isGuidanceModalOpen}
          onClose={handleCloseGuidanceModal}
          initialDestination={modalInitialDestination}
          initialCourse={modalInitialCourse}
        />

      </div>
    </Router>
  );
}
