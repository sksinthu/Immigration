import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "text-[var(--accent-blue)]" : "text-[var(--text-main)] hover:text-[var(--accent-blue)]";
    };

    return (
        <header className="w-full font-sans">
            {/* Top Bar */}
            <div className="bg-[var(--primary)] text-white py-2 text-sm hidden md:block border-b border-white/10">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2 group cursor-pointer">
                            <Phone size={16} className="text-[var(--accent-blue)] group-hover:text-white transition-colors" />
                            <span className="group-hover:text-[var(--accent-blue)] transition-colors">+94 123 456 789</span>
                        </div>
                        <div className="flex items-center space-x-2 group cursor-pointer">
                            <Mail size={16} className="text-[var(--accent-blue)] group-hover:text-white transition-colors" />
                            <span className="group-hover:text-[var(--accent-blue)] transition-colors">info@immigrationagency.lk</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-blue)] transition-colors transform hover:scale-110"><Facebook size={16} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-blue)] transition-colors transform hover:scale-110"><Twitter size={16} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-blue)] transition-colors transform hover:scale-110"><Linkedin size={16} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-blue)] transition-colors transform hover:scale-110"><Instagram size={16} /></a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center gap-2 group">
                                {/* Logo Icon Placeholder */}
                                <div className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-[var(--accent-blue)] transition-colors">
                                    IA
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-[var(--primary)] leading-none">
                                        Immigration
                                    </span>
                                    <span className="text-sm font-bold text-[var(--accent-blue)] tracking-widest uppercase leading-none">
                                        Agency
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className={`${isActive('/')} font-semibold transition-colors text-sm uppercase tracking-wide`}>Home</Link>
                            <Link to="/about" className={`${isActive('/about')} font-semibold transition-colors text-sm uppercase tracking-wide`}>About Us</Link>


                            <Link to="/blog" className={`${isActive('/blog')} font-semibold transition-colors text-sm uppercase tracking-wide`}>Blog</Link>
                            <Link to="/our-process" className={`${isActive('/our-process')} font-semibold transition-colors text-sm uppercase tracking-wide`}>Our Process</Link>
                            <Link to="/testimonials" className={`${isActive('/testimonials')} font-semibold transition-colors text-sm uppercase tracking-wide`}>Testimonials</Link>
                            <Link to="/contact" className="bg-[var(--accent-blue)] text-white px-6 py-3 rounded-md font-bold hover:bg-[var(--primary)] transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-0.5">
                                Contact Us
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-[var(--text-main)] hover:text-[var(--primary)] focus:outline-none"
                            >
                                {isOpen ? <X size={32} /> : <Menu size={32} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-[var(--text-main)] hover:bg-gray-50 hover:text-[var(--accent-blue)] rounded-md font-medium border-b border-gray-100">Home</Link>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-[var(--text-main)] hover:bg-gray-50 hover:text-[var(--accent-blue)] rounded-md font-medium border-b border-gray-100">About Us</Link>


                            <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-[var(--text-main)] hover:bg-gray-50 hover:text-[var(--accent-blue)] rounded-md font-medium border-b border-gray-100">Blog</Link>
                            <Link to="/testimonials" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-[var(--text-main)] hover:bg-gray-50 hover:text-[var(--accent-blue)] rounded-md font-medium border-b border-gray-100">Testimonials</Link>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 mt-4 text-center bg-[var(--accent-blue)] text-white rounded-md font-bold hover:bg-blue-600">Contact Us</Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
