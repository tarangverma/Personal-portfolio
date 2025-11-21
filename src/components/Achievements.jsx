import React from 'react';
import { Trophy, GitPullRequest, Code, Award, ExternalLink } from 'lucide-react';

const achievements = [
    {
        title: "Keptn-artifacthub",
        links: ["https://github.com/tarangverma/artifacthub/commit/6983ca03048c54997f2b48c06b9433a0165c281f", "https://github.com/keptn-contrib/unleash-service/commit/43d554aad7cef412ad79c5767724c331eea0d3b5", "https://github.com/tarangverma/artifacthub/commit/f602cc08879b3d3336715c2bcd2f86a5c235a0dc"],
        description: "Contributor to an open-source event-driven framework for continuous delivery and automated operations.",
        icon: <GitPullRequest className="w-6 h-6 text-orange-500" />,
        type: "Open Source"
    },
    {
        title: "Kubescape",
        links: ["https://github.com/kubescape/kubescape/commits?author=tarangverma"],
        description: "Contributor to an open-source security tool for Kubernetes environments.",
        icon: <GitPullRequest className="w-6 h-6 text-blue-500" />,
        type: "Open Source"
    },
    {
        title: "LeetCode",
        description: "250+ questions solved in leetcode.",
        icon: <Code className="w-6 h-6 text-yellow-500" />,
        type: "Competitive Programming"
    },
    {
        title: "Keptn-datadog-services",
        links: ["https://github.com/tarangverma/datadog-service/commit/8e4ed7cb18cccdbfffae2f95d8f10d5cdbc354ea", "https://github.com/tarangverma/datadog-service/commit/07fbfdd3f5d4678cccf918260cc3981c9d21bb29", "https://github.com/tarangverma/datadog-service/commit/14aba21e48a98c92be42396828725876ef85e0d3"],
        description: "Contributor of Keptn-datadog-services a cloud-based monitoring and analytics platform that provides comprehensive visibility into the performance of various components within an IT infrastructure.",
        icon: <GitPullRequest className="w-6 h-6 text-purple-500" />,
        type: "Open Source"
    },
    {
        title: "SIH 2023 Internal Hackathon Win",
        description: "Winner of the internal Smart India Hackathon 2023.",
        icon: <Trophy className="w-6 h-6 text-amber-500" />,
        type: "Hackathon"
    }
];

export default function Achievements() {
    return (
        <div className="mt-24 w-full max-w-6xl mx-auto relative z-10">
            <div className="flex items-center gap-4 mb-10 justify-center">
                <div className="h-px w-12 bg-slate-300"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center uppercase tracking-tight">Achievements</h2>
                <div className="h-px w-12 bg-slate-300"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {achievements.map((item, index) => (
                    <div key={index} className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300 ring-1 ring-slate-100">
                                {item.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-slate-900 text-lg leading-tight">{item.title}</h3>
                                    {item.type && (
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                                            {item.type}
                                        </span>
                                    )}
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>

                                {item.links && (
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {item.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link}
                                                className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-200 border border-slate-200 hover:border-slate-900"
                                            >
                                                <ExternalLink size={10} />
                                                Contribution {i + 1}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
