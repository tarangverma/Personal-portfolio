import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experienceData = [
    {
        id: 1,
        title: "Founding Software Developer Intern",
        company: "Walkthru.so",
        location: "Remote",
        date: "Feb 2025 – October 2025",
        color: "text-orange-600",
        description: [
            "Led the development of a cross-platform extension for VS Code that keeps documentation in sync with the codebase, enabling faster onboarding, improved collaboration, and reducing knowledge silos.",
            "Successfully launched and deployed the extension across multiple platforms, including CursorAI, Windsurf, and the VS Code Marketplace.",
            "Enhanced performance and reliability across client and extension host layers by optimizing message passing, resource loading, and event-driven state management.",
        ],
    },
    {
        id: 2,
        title: "Full Stack Developer Intern",
        company: "PostCare.AI",
        location: "Remote",
        date: "April 2024 - July 2024",
        color: "text-blue-600",
        description: [
            "Built a health-focused solution to help people monitor their well-being by addressing their daily health queries effectively.",
            "Designed APIs to support the development process of various new web features.",
            "Developed microservices-based architecture with Node.js, Kubernetes, and Docker to support 500+ users weekly.",
            "Worked towards implementing best practices to design the back-end and front-end for the product.",
            "Demonstrated progressive troubleshooting abilities and strong communication skills in resolving complex issues.",
        ],
    },
    {
        id: 3,
        title: "Frontend Developer Intern",
        company: "Trainingmug",
        location: "Remote",
        date: "May 2023 - Oct 2023",
        color: "text-green-600",
        description: [
            "Helped in building an Ed-Tech product similar to HackerRank, LeetCode, etc. and made it user friendly and much interactive.",
            "Engineered robust API integrations for authentication, enabling secure communication between components.",
            "Reduced login errors by 15% and improved system reliability, supporting over 500 user's sessions monthly.",
        ],
    },
];

const ExperienceTimeline = ({ item, isLast }) => (
    <div className="flex relative group">
        {/* Timeline Line */}
        <div className="flex flex-col items-center mr-6">
            <div className={`w-0.5 ${item.color} ${isLast ? 'h-0' : 'h-full'} transition-all duration-300 group-hover:bg-slate-300`}></div>
            <div className={`p-2 rounded-full border-4 border-white shadow-md bg-white z-10 ${item.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                <Briefcase className="w-4 h-4" />
            </div>
            {!isLast && <div className={`w-0.5 h-full ${item.color} transition-all duration-300 group-hover:bg-slate-300`}></div>}
        </div>

        {/* Content Box */}
        <div className="flex-1 pb-10">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex justify-between items-start flex-wrap mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-tight">
                        {item.title}
                    </h3>
                </div>

                <p className="text-base font-semibold text-slate-700 mt-1 mb-3">{item.company}</p>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-slate-400" />
                        {item.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-slate-400" />
                        {item.date}
                    </span>
                </div>

                <ul className="list-none space-y-2 text-slate-700 text-sm">
                    {item.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                            <span className={`w-2 h-2 rounded-full mt-1.5 mr-3 flex-shrink-0 ${item.color}`}></span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default function Experience() {
    return (
        <div className="mt-24 w-full max-w-4xl mx-auto relative z-10 px-4">
            <div className="flex items-center gap-4 mb-12 justify-center">
                <div className="h-px w-12 bg-slate-300"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center uppercase tracking-tight">Experience</h2>
                <div className="h-px w-12 bg-slate-300"></div>
            </div>

            <div className="w-full">
                {experienceData.map((item, index) => (
                    <ExperienceTimeline 
                        key={item.id} 
                        item={item} 
                        isLast={index === experienceData.length - 1} 
                    />
                ))}
            </div>
        </div>
    );
}