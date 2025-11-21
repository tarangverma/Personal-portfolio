import React, { useState } from 'react';
import { X, Send, ChevronRight } from 'lucide-react';
import Achievements from './Achievements';
import Projects from './Projects';

export default function EnvelopeAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLetterVisible, setIsLetterVisible] = useState(false);
  const [zIndexHigh, setZIndexHigh] = useState(false);

  // Handle the opening sequence for better physics
  const handleOpen = () => {
    setIsOpen(true);
    // Delay the letter popping out until the flap is open
    setTimeout(() => {
      setZIndexHigh(true);
      setIsLetterVisible(true);
    }, 300);
  };

  const handleClose = () => {
    setIsLetterVisible(false);
    setZIndexHigh(false);
    // Delay closing the flap until letter is back inside
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <div className="h-full w-full bg-gradient-to-b from-sky-200 via-sky-100 to-amber-50 relative overflow-y-auto font-sans text-slate-800">

      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Decorative Clouds - Softened */}
      <div className="fixed top-20 right-10 w-24 h-12 bg-white blur-xl opacity-60 z-0 animate-pulse"></div>
      <div className="fixed top-40 left-20 w-32 h-14 bg-white blur-xl opacity-50 z-0"></div>

      {/* Lighthouse - Refined & Scaled Down */}
      <div className="fixed h-full w-full top-12 left-1/2 transform -translate-x-1/2 z-0 opacity-80 origin-top">
        <div className="relative w-full h-full overflow-y-auto flex flex-col items-center pb-20">

          {/* --- NEW ADDITION: Darkening Backdrop Overlay --- */}
          {/* This sits at z-30. The Letter sits at z-40 when open, so the letter stays bright while bg dims. */}
          <div
            onClick={handleClose}
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-all duration-700 ease-in-out
              ${isLetterVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}
          ></div>

          {/* Header Navigation */}
          <div className="flex w-xl justify-between items-center mb-12 px-2 md:px-4 relative z-10">
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">TV</div>
              <span className="font-bold text-xl tracking-tight">Tarang Verma</span>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
              <a href='https://www.linkedin.com/in/tarang-verma-33324121a/' className="hover:text-slate-900 cursor-pointer transition-colors">Linkedin</a>
              <a href='https://github.com/tarangverma' className="hover:text-slate-900 cursor-pointer transition-colors">GitHub</a>
              <a href='https://twitter.com/TarangVerma19' className="hover:text-slate-900 cursor-pointer transition-colors">X</a>

            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center mb-20 max-w-2xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">me.</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              I'm Tarang Verma, a passionate software engineer with a proven track record of delivering high-quality, scalable, and user-friendly applications.
            </p>
            <p className="text-sm text-slate-400 mt-2 uppercase tracking-widest font-semibold">Tap the envelope to open</p>
          </div>

          {/* --- ENVELOPE SYSTEM --- */}
          {/* The container height ensures layout doesn't jump when letter opens */}
          <div className={`relative w-full max-w-lg mx-auto transition-all duration-700 ease-in-out ${isLetterVisible ? 'h-[700px] md:h-[600px]' : 'h-[300px]'}`}>

            {/* 1. THE LETTER (Content) */}
            <div
              className={`relative left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                ${isLetterVisible ? 'top-0 scale-100 opacity-100' : 'top-[100px] scale-90 opacity-0'}
              `}
              style={{
                zIndex: zIndexHigh ? 40 : 0, // Switches Z-Index to pop OVER the envelope AND the overlay
                width: '100%',
                maxWidth: '650px'
              }}
            >
              <div className="bg-[#fffbf0] rounded-sm shadow-2xl p-8 md:p-12 relative text-slate-800 rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")` }}></div>

                {/* Close Button inside Letter */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleClose(); }}
                  className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors cursor-pointer z-50"
                >
                  <X size={20} />
                </button>

                <div className="font-serif space-y-6 relative">
                  <div className="border-b-2 border-slate-100 pb-6 mb-6 flex justify-between items-end">
                    <div>
                      <p className="text-xs font-sans font-bold text-slate-400 uppercase tracking-widest mb-1">From the desk of</p>
                      <h3 className="text-xl font-bold text-slate-900">Tarang Verma</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-sans text-slate-400">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 italic mb-6">"Building is the only thing I am good at."</h2>

                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500 my-6 font-sans">
                    <p className="text-slate-600 italic font-medium leading-relaxed">
                      "I love everything about what this organization is doing. I don't have many hobbies outside coding. I am not athletic, bad at singing, don't drink, can't dance. Building is the only thing I am good at. At this point, I want to be a part of taking something from 0 -&gt; 1 or 1 -&gt; 100. I just want to be heads down chasing that goal."
                    </p>
                  </div>

                  <div className="text-lg leading-relaxed space-y-4 text-slate-700">
                    <p>Hi,</p>
                    <p>
                      Really loved what you were building here and wanted to reach out to see if there were any openings for Software Engineers.
                    </p>
                    <p>
                      I have 1 year of relevant experience building full-stack applications primarily data-driven at <a href="https://trainingmug.com/" className="text-orange-600 hover:text-orange-700 font-medium hover:underline" target="_blank" rel="noopener noreferrer">TrainingMug</a>, <a href="https://postcare.ai/" className="text-orange-600 hover:text-orange-700 font-medium hover:underline" target="_blank" rel="noopener noreferrer">PostCare.AI</a>, and <a href="https://walkthru.so" className="text-orange-600 hover:text-orange-700 font-medium hover:underline" target="_blank" rel="noopener noreferrer">walkthru</a> as a part of their early teams where I helped scale internal micro-services to thousands of workflows and users.
                    </p>
                    <p>
                      Being a part of super lean teams, one of my strongest suits has been the ability to work across the stack from building scalable, robust backend systems to high throughput data ingestion pipelines to production grade frontend components in React.
                    </p>
                    <p>
                      I have built several end-to-end systems that involve several layers at the intersection of UI (Next.js/React.js), Backend (Python, Node + Go based services using GraphQL and GRPC) as well as infrastructure pieces (AWS + GCP over K8s) from building complex workflows, DAG visualizations and drag and drop component canvas for clients.
                    </p>
                    <p>
                      I would love to be a part of the team and define its work and culture.
                    </p>
                    <p>
                      Looking forward to hearing from you soon!
                    </p>
                    <p className="font-semibold text-slate-900">
                      Best,<br />
                      Tarang
                    </p>
                  </div>

                  <div className="pt-8 mt-8 border-t border-slate-100 flex justify-between items-center font-sans">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-500">TV</div>
                      <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-gray-500">HR</div>
                    </div>
                    <button className="group flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors">
                      Get in Touch <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. THE ENVELOPE WRAPPER */}
            <div
              onClick={!isOpen ? handleOpen : undefined}
              className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full max-w-[500px] h-[300px] transition-all duration-500 
                ${!isOpen ? 'cursor-pointer hover:scale-105 hover:-rotate-1' : ''}
                ${isLetterVisible ? 'translate-y-[200px] opacity-100 blur-0 scale-90 pointer-events-none' : 'translate-y-0'}
              `}
            // Note: Removed opacity/blur from envelope itself so it sits nicely under the dark overlay
            // logic: The overlay (z-30) sits ON TOP of this envelope (z-auto/z-0 context) but UNDER the letter (z-40)
            >

              {/* Envelope Body (Back) */}
              <div className="absolute inset-0 bg-amber-100 rounded-lg shadow-xl border-2 border-amber-200 overflow-hidden">
                {/* LARGE STAMP - Centered on the back of the envelope */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg shadow-md flex items-center justify-center border-2 border-blue-600 rotate-3 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100 delay-300'}`}>
                  <div className="text-white text-3xl font-bold italic opacity-80">SR</div>
                  <div className="absolute top-1 right-1 text-white text-xs font-semibold">25¢</div>
                  <div className="absolute bottom-1 left-1 text-white text-xs font-semibold">USA</div>
                  {/* Faux postmark */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-10 border-2 border-dashed border-red-400 rounded-full rotate-12 opacity-50"></div>
                  </div>
                </div>

                {/* SMALLER DECORATIVE STAMP - Top right corner */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-tr from-green-300 to-emerald-400 rounded-full shadow-sm flex items-center justify-center border border-green-500 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100 delay-200'}`}>
                  <ChevronRight size={18} className="text-white opacity-70" />
                </div>

              </div>

              {/* Envelope Contents Shadow (Inside depth) */}
              <div className="absolute bottom-0 left-2 right-2 h-[90%] bg-amber-50/50 rounded-b-lg shadow-inner"></div>

              {/* Top Flap (Rotates) */}
              <div
                className="absolute top-0 left-0 w-full h-1/2 z-30 origin-top transition-all duration-700 ease-in-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
                }}
              >
                {/* Flap Front */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                    clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                    borderTop: '2px solid #fcd34d',
                    zIndex: 2
                  }}
                ></div>

                {/* WAX SEAL (Trigger) - Only visible on front */}
                <div className={`absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-0 delay-0' : 'opacity-100 delay-300'}`}>
                  <div className="relative group">
                    <div className="w-16 h-16 bg-red-700 rounded-full shadow-lg flex items-center justify-center border-4 border-red-800 group-hover:bg-red-600 transition-colors">
                      <div className="w-12 h-12 border border-red-900/30 rounded-full flex items-center justify-center">
                        <Send size={20} className="text-red-900 ml-1" />
                      </div>
                    </div>
                    {/* Pulse effect indicating click */}
                    <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20 group-hover:opacity-40"></div>
                  </div>
                </div>

                {/* Flap Back (Visible when open) */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: '#fde68a',
                    clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                    transform: 'rotateX(0deg)',
                    zIndex: 1
                  }}
                ></div>
              </div>

              {/* Bottom/Side Flaps (Static Front) */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Left Flap */}
                <div
                  className="absolute bottom-0 left-0 w-1/2 h-full bg-amber-100"
                  style={{
                    clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                    background: 'linear-gradient(45deg, #fef3c7 0%, #fffbeb 100%)',
                    boxShadow: 'inset -2px 0 5px rgba(0,0,0,0.05)'
                  }}
                ></div>
                {/* Right Flap */}
                <div
                  className="absolute bottom-0 right-0 w-1/2 h-full bg-amber-100"
                  style={{
                    clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
                    background: 'linear-gradient(-45deg, #fef3c7 0%, #fffbeb 100%)',
                    boxShadow: 'inset 2px 0 5px rgba(0,0,0,0.05)'
                  }}
                ></div>
                {/* Bottom Flap */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1/2 bg-amber-200"
                  style={{
                    clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                    background: 'linear-gradient(to top, #fde68a 0%, #fef3c7 100%)',
                    boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
                  }}>
                </div>
              </div>
            </div>
          </div>

          {/* --- PROJECTS SECTION --- */}
          <Projects />

          {/* --- ACHIEVEMENTS SECTION --- */}
          <Achievements />

        </div>
      </div>
    </div>
  );
}