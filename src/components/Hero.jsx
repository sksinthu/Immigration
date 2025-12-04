import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative bg-[var(--primary)] text-white overflow-hidden min-h-[600px] flex items-center">
            {/* Background Overlay/Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/90 to-blue-900/80 z-10"></div>

            {/* Replaced with a more reliable image source or local asset if possible. Using a high-quality Unsplash image for now. */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
                }}
            ></div>

            <div className="container mx-auto px-4 py-12 relative z-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20 shadow-lg animate-fade-in-up">
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse"></span>
                            <span className="text-sm font-bold tracking-wide uppercase">#1 Immigration Consultants in Sri Lanka</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
                            Your Gateway to a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Better Future</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
                            Expert guidance for Skilled Migration, Student Visas, and Business Investment. We make your dream of living abroad a reality with our proven process.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                            <Link to="/contact" className="bg-[var(--accent-blue)] hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-blue-500/40 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                                Free Online Assessment <ArrowRight size={20} />
                            </Link>
                            <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center transform hover:-translate-y-1">
                                Our Services
                            </Link>
                        </div>

                        <div className="mt-16 flex flex-wrap items-center gap-8 text-sm font-medium text-gray-300 animate-fade-in-up delay-400">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                <CheckCircle size={18} className="text-[var(--accent-blue)]" />
                                <span>Certified Experts</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                <CheckCircle size={18} className="text-[var(--accent-blue)]" />
                                <span>98% Success Rate</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                <CheckCircle size={18} className="text-[var(--accent-blue)]" />
                                <span>Fast Processing</span>
                            </div>
                        </div>
                    </div>

                    {/* Optional: Hero Image/Graphic on the right for desktop */}
                    <div className="hidden lg:block w-full max-w-md animate-float">
                        {/* Placeholder for a floating element or image */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[var(--accent-blue)]/20 rounded-full blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Happy Team"
                                className="relative rounded-2xl shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
