import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

/**
 * FloatingButtons Component
 * Provides scroll-to-top and WhatsApp contact buttons
 * Fixed at bottom-right corner with smooth animations
 */
const FloatingButtons = ({ whatsappNumber = '+94760131613' }) => {
    // State to control scroll-to-top button visibility
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Monitor scroll position to show/hide scroll-to-top button
    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 300px down
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /**
     * Scroll to top with smooth animation
     */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    /**
     * Open WhatsApp chat in new tab
     */
    const openWhatsApp = () => {
        const message = encodeURIComponent('Hello! I would like to inquire about immigration services.');
        const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* Scroll to Top Button - Conditionally rendered */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="group w-14 h-14 bg-[var(--primary)] rounded-full shadow-lg hover:shadow-xl 
                     flex items-center justify-center transition-all duration-300 
                     hover:scale-110 active:scale-95"
                    aria-label="Scroll to top"
                >
                    <ArrowUp
                        size={24}
                        className="text-white group-hover:animate-bounce"
                    />
                </button>
            )}

            {/* WhatsApp Contact Button - Always visible */}
            <button
                onClick={openWhatsApp}
                className="group w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl 
                   flex items-center justify-center transition-all duration-300 
                   hover:scale-110 active:scale-95 border-2 border-green-500"
                aria-label="Contact us on WhatsApp"
            >
                <MessageCircle
                    size={24}
                    className="text-green-500 group-hover:text-green-600 transition-colors"
                />
            </button>
        </div>
    );
};

export default FloatingButtons;
