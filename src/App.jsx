import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Countries from './components/Countries';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Testimonials from './components/Testimonials';
import OurProcess from './components/OurProcess';
import FloatingButtons from './components/FloatingButtons';
import FreeAssessment from './components/FreeAssessment';
import { Link } from "react-router-dom";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder Pages
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Countries />
    {/* Call to Action Section */}
    <section className="py-24 bg-[var(--primary)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Start Your Journey?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Take the first step towards your dream life abroad. Get a free assessment from our certified immigration experts today.
        </p>
        <Link to="/contact">
          <button className="bg-[var(--accent-blue)] hover:bg-blue-600 text-white px-12 py-5 rounded-lg font-bold text-xl transition-all shadow-xl shadow-blue-500/40 transform hover:-translate-y-1">
            Free Online Assessment
          </button>
        </Link>
      </div>
    </section>
  </>
);

const AboutPage = () => (
  <div className="pt-20 pb-20 container mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">About Us</h1>
    <p className="text-lg text-gray-600">We are a dedicated team of immigration experts...</p>
  </div>
);

const ServicesPage = () => (
  <div className="pt-10">

    <Services />
  </div>
);

const CountriesPage = () => (
  <div className="pt-20">
    <div className="container mx-auto px-4 text-center mb-12">
      <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">Destinations</h1>
      <p className="text-lg text-gray-600">Explore the countries we can help you move to.</p>
    </div>
    <Countries />
  </div>
);

const ContactPage = () => (
  <div className="pt-20 pb-20 container mx-auto px-4">
    <h1 className="text-4xl font-bold text-[var(--primary)] mb-8 text-center">Contact Us</h1>
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Doe" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-32" placeholder="How can we help you?"></textarea>
        </div>
        <button type="submit" className="w-full bg-[var(--accent-blue)] text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors shadow-lg">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/countries" element={<CountriesPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/our-process" element={<OurProcess />} />
            <Route path="/contact" element={<FreeAssessment />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons whatsappNumber="+94760131613" />
      </div>
    </Router>
  );
}

export default App;
