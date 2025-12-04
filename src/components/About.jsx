import React from 'react';
import { CheckCircle, MapPin, Award, Users, Globe, ShieldCheck } from 'lucide-react';
import Countries from './Countries';

const servicesList = [
    "Tourist / Visit Visas",
    "Student Visas",
    "Work Permits",
    "Permanent Residency (PR)",
    "Business & Entrepreneur Visas",
    "Family & Dependent Visas",
    "Spouse & Partner Visas",
    "Citizenship Applications",
    "Appeals for Rejected Visas",
    "Specialized Visas (Same-Gender Visas)"
];

const whyChooseUs = [
    {
        title: "Expertise & Experience",
        desc: "With over 10 years of experience, our team of legal experts and visa professionals navigates complex immigration laws with ease.",
        icon: <Award className="w-8 h-8 text-[var(--accent-blue)]" />
    },
    {
        title: "Comprehensive Services",
        desc: "From initial consultation to final approval, we handle every aspect of your application, whether it's for travel, study, work, or settlement.",
        icon: <Globe className="w-8 h-8 text-[var(--accent-blue)]" />
    },
    {
        title: "Dedicated Support",
        desc: "We provide continuous support throughout the entire process, ensuring you are informed and confident at every step.",
        icon: <Users className="w-8 h-8 text-[var(--accent-blue)]" />
    },
    {
        title: "Personalized Solutions",
        desc: "We understand that every case is unique. We tailor our strategies to meet your specific goals and circumstances.",
        icon: <ShieldCheck className="w-8 h-8 text-[var(--accent-blue)]" />
    }
];



const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-[var(--primary)] text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526304640152-d4619684e484?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">About Immigration Agency LK</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Your trusted partner in navigating the path to a new life abroad.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Our Team"
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-[var(--accent-blue)] font-bold uppercase tracking-wider mb-2">Who We Are</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-6">Based in Colombo, Connecting You to the World</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Immigration Agency LK is a premier consultancy firm headquartered in the heart of Colombo. We specialize in helping individuals and families realize their dreams of traveling, studying, working, or settling abroad.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our team consists of highly experienced consultants, legal experts, and visa professionals who have been serving clients for over <span className="font-bold text-[var(--primary)]">10 years</span>. We pride ourselves on our deep understanding of global immigration laws and our commitment to providing honest, transparent, and effective advice.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                <img className="w-12 h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team" />
                                <img className="w-12 h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team" />
                                <img className="w-12 h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Team" />
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">+10</div>
                            </div>
                            <span className="text-sm font-medium text-gray-500">Join our growing list of success stories.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Our Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We offer a comprehensive range of visa and immigration services tailored to your specific needs.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {servicesList.map((service, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                                <CheckCircle className="text-[var(--accent-blue)] flex-shrink-0" size={20} />
                                <span className="font-semibold text-[var(--text-main)]">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-[var(--surface)]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Why Choose Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We are dedicated to your success and provide a level of service that sets us apart.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center">
                                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Countries Supported Section */}
            <Countries />

            {/* CTA Section */}
            <section className="py-16 bg-[var(--primary)] text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Start Your Journey With Us Today</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact our expert team in Colombo for a free initial consultation.
                    </p>
                    <button className="bg-[var(--accent-blue)] hover:bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg">
                        Book a Consultation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;
