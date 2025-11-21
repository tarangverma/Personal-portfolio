import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Evently",
        subtitle: "A comprehensive event scheduling platform allowing users to organize and track meetings effortlessly.",
        image: "https://images.unsplash.com/photo-1642618717985-a681a41d04bc?w=600&auto=format&fit=crop&q=60",
        link: "https://calander-pearl.vercel.app/"
    },
    {
        title: "Tic-Tac-Toe",
        subtitle: "A real-time multiplayer game experience connecting players worldwide with sleek animations.",
        image: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGljJTIwdGFjJTIwdG9lJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D",
        link: "https://tic-tac-toe-ebon-omega.vercel.app/"
    },
    {
        title: "Let's Chat",
        subtitle: "Modern messaging application focused on outfit tracking and social sharing capabilities.",
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1lc3NhZ2V8ZW58MHx8MHx8fDA%3D",
        link: "https://github.com/tarangverma/lets-chat"
    },
    {
        title: "AI Transcripter",
        subtitle: "Powered by AI to convert video content into text instantly with high accuracy.",
        image: "https://images.unsplash.com/photo-1627244714766-94dab62ed964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
        link: "https://ai-video-transciption.vercel.app/"
    },
    {
        title: "SUPER LUDO",
        subtitle: "A fully functional 15x15 grid Ludo game with complex logic and 4-player support.",
        image: "https://images.unsplash.com/photo-1595744043037-68de3376ed59?w=600&auto=format&fit=crop&q=60",
        link: "https://github.com/tarangverma/SUPER_LUDO"
    },
    {
        title: "Dashboard",
        subtitle: "User modern dashboard ",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFzaGJvYXJkfGVufDB8fDB8fHww",
        link: "https://dashboard-six-cyan-22.vercel.app/"
    }
];

export default function Projects() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 mt-32 mb-20">
            <div className="flex items-center gap-4 mb-12 justify-center">
                <div className="h-px w-12 bg-slate-300"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center uppercase tracking-tight">Projects</h2>
                <div className="h-px w-12 bg-slate-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-bold text-xl text-slate-900 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                                <ExternalLink size={16} className="text-slate-400 group-hover:text-orange-600 transition-colors" />
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                                {project.subtitle}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
