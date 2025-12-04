import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[var(--primary)] text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: About */}
                    <div>
                        <Link to="/" className="text-3xl font-bold text-white block mb-6">
                            Immigration<span className="text-[var(--accent-blue)]">Agency</span>
                        </Link>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            We are a leading immigration consultancy firm providing expert guidance for skilled migration, student visas, and business investment opportunities globally.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--accent-blue)] hover:border-[var(--accent-blue)] transition-all cursor-pointer transform hover:-translate-y-1">
                                <span className="font-bold">f</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--accent-blue)] hover:border-[var(--accent-blue)] transition-all cursor-pointer transform hover:-translate-y-1">
                                <span className="font-bold">t</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--accent-blue)] hover:border-[var(--accent-blue)] transition-all cursor-pointer transform hover:-translate-y-1">
                                <span className="font-bold">in</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--accent-blue)] rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span>About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span>Our Services</Link></li>
                            <li><Link to="/success-stories" className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span>Success Stories</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span>Blog & News</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span>Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Visa Services
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--accent-blue)] rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li><Link to="/services/skilled" className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span>Skilled Migration</Link></li>
                            <li><Link to="/services/student" className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span>Student Visas</Link></li>
                            <li><Link to="/services/business" className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span>Business Visas</Link></li>
                            <li><Link to="/services/family" className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span>Family Sponsorship</Link></li>
                            <li><Link to="/services/visitor" className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span>Visitor Visas</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Get in Touch
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--accent-blue)] rounded-full"></span>
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent-blue)] transition-colors">
                                    <MapPin className="text-[var(--accent-blue)] group-hover:text-white transition-colors" size={20} />
                                </div>
                                <span className="text-gray-400 group-hover:text-white transition-colors">123, Galle Road, Colombo 03, Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent-blue)] transition-colors">
                                    <Phone className="text-[var(--accent-blue)] group-hover:text-white transition-colors" size={20} />
                                </div>
                                <span className="text-gray-400 group-hover:text-white transition-colors">+94 760 131 613</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent-blue)] transition-colors">
                                    <Mail className="text-[var(--accent-blue)] group-hover:text-white transition-colors" size={20} />
                                </div>
                                <span className="text-gray-400 group-hover:text-white transition-colors">avmtravels16@gmail.com</span>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <h5 className="text-sm font-semibold mb-4 text-gray-300">Subscribe to Newsletter</h5>
                            <form className="flex" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-white/5 border border-gray-700 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:border-[var(--accent-blue)] w-full text-sm transition-colors"
                                />
                                <button className="bg-[var(--accent-blue)] hover:bg-blue-600 text-white px-4 py-3 rounded-r-lg transition-colors">
                                    <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2025 Immigration Agency. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-[var(--accent-blue)] transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-[var(--accent-blue)] transition-colors">Terms of Service</Link>
                        <Link to="/sitemap" className="hover:text-[var(--accent-blue)] transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
