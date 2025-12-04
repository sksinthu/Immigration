import React from 'react';
import { MapPin, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Mr. Sathurshan & family",
        location: "Mullaitivu",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        quote: "The Visa Centre made our dream of moving to Canada a reality. Their guidance was invaluable throughout the entire process."
    },
    {
        name: "Ms. Anjali Perera",
        location: "Colombo",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        quote: "Highly professional and efficient. I received my student visa for the UK much faster than I expected. Thank you!"
    },
    {
        name: "Mr. Kumar & Mrs. Devi",
        location: "Jaffna",
        image: "https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        quote: "We are so grateful for the support we received for our parent visa application. The team was always there to answer our questions."
    },
    {
        name: "Mr. Fazil Mohamed",
        location: "Kandy",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        quote: "Excellent service! They helped me navigate the complex skilled migration process for Australia with ease."
    },
    {
        name: "Mrs. Silva & family",
        location: "Galle",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        quote: "Moving to New Zealand was a big decision for our family. The Visa Centre provided expert advice and support every step of the way."
    },
    {
        name: "Mr. Rajan",
        location: "Trincomalee",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        quote: "I highly recommend their services for anyone looking to work abroad. They are trustworthy and reliable."
    },
    {
        name: "Ms. Nimali",
        location: "Negombo",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        quote: "The team at Visa Centre is fantastic. They helped me with my visitor visa to the USA, and the process was smooth and hassle-free."
    },
    {
        name: "Mr. & Mrs. Fernando",
        location: "Kurunegala",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        quote: "Professional, knowledgeable, and friendly. We couldn't have asked for better partners in our migration journey."
    }
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
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
