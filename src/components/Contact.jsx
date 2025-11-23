import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Using mock data for demonstration
const contactInfo = {
    email: "tarangverma004@gamil.com",
    phone: "+91 7870508923",
    location: "Remote (India)",
};

const ContactLink = ({ href, icon: Icon, text, description }) => (
    <a
        href={href}
        className="group flex items-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:border-orange-200"
        target={href.startsWith('mailto:') || href.startsWith('tel:') ? "_self" : "_blank"}
        rel="noopener noreferrer"
    >
        <div className="p-3 rounded-full bg-slate-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-inner">
            <Icon size={24} />
        </div>
        <div className="ml-4 flex-1">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{description}</p>
            <p className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{text}</p>
        </div>
    </a>
);

export default function Contact() {
    return (
        <div className="mt-24 w-full max-w-7xl mx-auto relative z-10 px-4 mb-20">
            <div className="flex items-center gap-4 mb-12 justify-center">
                <div className="h-px w-12 bg-slate-300"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center uppercase tracking-tight">Get in Touch</h2>
                <div className="h-px w-12 bg-slate-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ContactLink
                    href={`mailto:${contactInfo.email}`}
                    icon={Mail}
                    text={contactInfo.email}
                    description="Email Address"
                />
                <ContactLink
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    icon={Phone}
                    text={contactInfo.phone}
                    description="Phone Number"
                />
                <ContactLink
                    href="#"
                    icon={MapPin}
                    text={contactInfo.location}
                    description="Location"
                />
            </div>
        </div>
    );
}