import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSidebar = () => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 sticky top-24">
            {/* Company Name */}
            <h4 className="text-2xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Immigration Agency
            </h4>

            {/* Google Maps Embed */}
            <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63133.89!2d81.2!3d8.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzYnMDAuMCJOIDgxwrAxMicwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Immigration Agency Location"
                ></iframe>
            </div>

            {/* Physical Address */}
            <div className="mb-6">
                <div className="flex items-start gap-3">
                    <MapPin className="text-[var(--accent-blue)] mt-1 flex-shrink-0" size={20} />
                    <div>
                        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
                            03, Main Street,Saraiyady,<br />
                            Point Pedro,Jaffna.<br />
                            
                             



                        </p>
                    </div>
                </div>
            </div>

            {/* Email Section */}
            <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    <Mail className="text-[var(--accent-blue)]" size={20} />
                    Email:
                </h5>
                <a
                    href="mailto:avmtravels16@gmail.com"
                    className="text-gray-600 hover:text-[var(--accent-blue)] transition-colors block"
                    style={{ fontFamily: 'Roboto, sans-serif', fontSize: '17px' }}
                >
                    avmtravels16@gmail.com
                </a>
            </div>

            {/* Hotlines Section */}
            <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    <Phone className="text-[var(--accent-blue)]" size={20} />
                    Hotlines:
                </h5>
                <div className="space-y-2">
                    {/* <a
                        href="tel:+94773919569"
                        className="text-gray-600 hover:text-[var(--accent-blue)] transition-colors block"
                        style={{ fontFamily: 'Roboto, sans-serif', fontSize: '17px' }}
                    >
                        +94 760 131 613
                    </a> */}
                    <a
                        href="tel:+94750303990"
                        className="text-gray-600 hover:text-[var(--accent-blue)] transition-colors block"
                        style={{ fontFamily: 'Roboto, sans-serif', fontSize: '17px' }}
                    >
                        +94 773 003 232
                    </a>
                    {/* <a
                        href="tel:+94267629619"
                        className="text-gray-600 hover:text-[var(--accent-blue)] transition-colors block"
                        style={{ fontFamily: 'Roboto, sans-serif', fontSize: '17px' }}
                    >
                        +94 267 629 619
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default ContactSidebar;
