import React from 'react';
import { Plane, GraduationCap, Globe, Users, Briefcase, ShieldCheck, AlertTriangle } from 'lucide-react';

const services = [
    {
        title: "Visit Visas",
        desc: "Tourist travel or visit friends overseas",
        icon: Plane,
        color: "bg-blue-500"
    },
    {
        title: "Student Visas",
        desc: "Study at an overseas school, university or institute",
        icon: GraduationCap,
        color: "bg-green-500"
    },
    {
        title: "Migration",
        desc: "Settle overseas to work or join family",
        icon: Globe,
        color: "bg-purple-500"
    },
    {
        title: "Visa Rejection Appeals",
        desc: "Appeal a declined visa application",
        icon: AlertTriangle,
        color: "bg-red-500"
    },
    {
        title: "Work Visas",
        desc: "Work abroad short-term or long-term",
        icon: Briefcase,
        color: "bg-orange-500"
    },
    {
        title: "Business Visas",
        desc: "Start a business or invest overseas",
        icon: Users,
        color: "bg-indigo-500"
    },
    {
        title: "Citizenship by Investment",
        desc: "New pathway to citizenship by investment",
        icon: ShieldCheck,
        color: "bg-teal-500"
    }
];

const Services = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-[var(--accent-blue)] font-bold tracking-wider uppercase mb-3 text-sm">What We Offer</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-4">Our Services</h3>
                    <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
                        Comprehensive immigration solutions tailored to your unique needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className={`${service.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group cursor-pointer`}>
                                <div className="mb-4 bg-white/20 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-white/90 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
