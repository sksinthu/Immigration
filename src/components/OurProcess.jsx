import React from 'react';
import { CheckCircle, FileText, ShieldCheck, Users, Globe, Briefcase, GraduationCap, Plane, AlertTriangle } from 'lucide-react';

const processSteps = [
    {
        title: "CONSULTATION",
        desc: "Understand goals and assess eligibility",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "DOCUMENTATION",
        desc: "Collect required documents as per visa requirements",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "PRE-ASSESSMENT",
        desc: "Evaluate qualifications, skills, experience",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "STRATEGIC PLANNING",
        desc: "Develop customized immigration plan",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "APPLICATION ASSISTANCE",
        desc: "Prepare and submit accurate applications",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "FOLLOW-UP",
        desc: "Liaise with authorities to track progress",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "POST-LANDING SERVICES",
        desc: "Support with settlement and integration",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const serviceCards = [
    {
        title: "Visit Visas",
        desc: "Tourist travel or visit friends overseas",
        icon: <Plane size={32} className="text-white" />,
        image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Student Visas",
        desc: "Study at an overseas school, university or institute",
        icon: <GraduationCap size={32} className="text-white" />,
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Migration",
        desc: "Settle overseas to work or join family",
        icon: <Globe size={32} className="text-white" />,
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Visa Rejection Appeals",
        desc: "Appeal a declined visa application",
        icon: <AlertTriangle size={32} className="text-white" />,
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Work Visas",
        desc: "Work abroad short-term or long-term",
        icon: <Briefcase size={32} className="text-white" />,
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Business Visas",
        desc: "Start a business or invest overseas",
        icon: <Users size={32} className="text-white" />,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Citizenship by Investment",
        desc: "New pathway to citizenship by investment",
        icon: <ShieldCheck size={32} className="text-white" />,
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const OurProcess = () => {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* 1. Heading & YouTube Video */}
            <section className="py-20 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-6">Visa Processing and Consultation</h1>
                    <div className="w-24 h-1 bg-[var(--accent-blue)] mx-auto rounded-full"></div>
                </div>
                <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                        className="w-full h-full"
                         src="https://www.youtube.com/embed/Vuj1G6NT1Zg"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* 2. Introduction Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            <span className="font-bold text-[var(--primary)]">Immigration Agency LK</span> is a world leading visa consultancy and processing firm. We comprise of a global network of registered migration agents, barristers, solicitors, licensed visa consultants, and highly experienced processing staff.
                        </p>
                        <p>
                            In our <span className="font-bold text-[var(--accent-blue)]">23 years of business</span>, The Visa Centre has provided specialist consulting services and successfully processed all types of complex visas for clients travelling to countries around the world including appeals of rejected visas.
                        </p>
                        <p>
                            Our range of work includes obtaining visas to Australia, Belgium, Canada, China, Cyprus, Denmark, Finland, France, Germany, Iceland, India, Italy, Japan, Malaysia, Netherlands, New Zealand, Norway, Philippines, Poland, Singapore, Sweden, Switzerland, the UK, the USA and many other countries.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[var(--accent-blue)]">
                            <p className="font-medium text-[var(--primary)]">
                                We have expertise in the following visas categories: Visit Visa / Tourist Visa Applications, Appeals of Rejected Visa Applications, Migration, Student Visas, Work Permits, Permanent Residence, Citizenship, Dependent Visas, Spouse Visas, Parent Visas, Business/Entrepreneur Visas and Same-Gender Visas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Process Section (Highlights) */}
            <section className="py-20 bg-[var(--surface)]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[var(--primary)] mb-12">Our Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center group">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--accent-blue)] transition-colors">
                                <Users className="text-[var(--accent-blue)] group-hover:text-white transition-colors" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Free Consultation</h3>
                            <p className="text-gray-600">Offer free initial consultation online or in-office to assess your needs.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center group">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors">
                                <FileText className="text-green-600 group-hover:text-white transition-colors" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Document Checklist</h3>
                            <p className="text-gray-600">Issue checklist, collate documents, and prepare everything for application.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center group">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 transition-colors">
                                <ShieldCheck className="text-purple-600 group-hover:text-white transition-colors" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Guaranteed Results</h3>
                            <p className="text-gray-600">Professionally prepared applications, expert guidance, privacy & security.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Process Steps (Cards) */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                            <img
                                src={step.image}
                                alt={step.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-colors"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <div className="w-10 h-10 bg-[var(--accent-blue)] rounded-full flex items-center justify-center font-bold mb-3 text-sm">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-300 opacity-90">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Service Cards Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[var(--primary)] mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {serviceCards.map((service, index) => (
                            <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors"></div>
                                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                    <div className="mb-auto bg-white/20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-white/90 text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default OurProcess;
