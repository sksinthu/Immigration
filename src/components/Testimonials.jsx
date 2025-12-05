import React from 'react';
import { MapPin, Quote } from 'lucide-react';
const testimonials = [
    { image: "/images/IMG-20251205-WA0011.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0012.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0013.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0014.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0015.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0016.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0017.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0018.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0020.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0022.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0023.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0024.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0025.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0026.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0027.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0028.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0029.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0030.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0031.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0032.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0033.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0034.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0035.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0036.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0037.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0038.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0039.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0040.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0041.jpg", name: "", location: "", quote: "" },
    { image: "/images/IMG-20251205-WA0042.jpg", name: "", location: "", quote: "" }
];


const Testimonials = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-6 uppercase tracking-tight">
                        Our Successful Clients and Testimonials
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Join hundreds of satisfied clients who have successfully started their new lives abroad with our help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((client, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white text-sm italic line-clamp-3">"{client.quote}"</p>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-lg font-bold text-[var(--primary)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">
                                    {client.name}
                                </h3>
                                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
                                    <MapPin size={14} className="text-[var(--accent-blue)]" />
                                    <span>{client.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
