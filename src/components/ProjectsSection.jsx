import { lazy, Suspense, useMemo, useState } from 'react';

import gloryImage from '../assets/glory.jpg';
import techtroveImage from '../assets/techtrove.png';
import aiVideoScriptGeneratorImage from '../assets/ai_video_script_generator.png';
import passwordManagerImage from '../assets/password_manager.png';
import notesAppImage from '../assets/notes_app.png';
import vesperaAIImage from '../assets/vespera_ai.png';
import { BiDownload, BiLink } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { CircleLoader } from 'react-spinners';

const CertificatesSection = lazy(() => import('./CertificatesSection'));


const projects = [
    {
        title: "Glory",
        description: {
            "overview": "Full-stack E-Commerce platform for women's clothing built with React, Node.js, and MongoDB",
            "features": [
                "Product management system",
                "User authentication & authorization",
                "Stripe payment integration",
                "Responsive UI/UX design",
                "Inventory tracking system"
            ]
        },
        skills: ["React", "Redux", "Tailwind CSS", "Node.js", "MongoDB", "Stripe API"],
        github: "https://github.com/IshantSomani/E-commerce",
        demo: "https://glory-three.vercel.app/",
        image: gloryImage
    },
    {
        title: "TechTrove",
        description: {
            "overview": "AI Tool Showcase Platform with React and Node.js",
            "features": [
                "Interactive AI tool demonstrations",
                "User-friendly interface",
                "Tool categorization system",
                "Dynamic content loading",
                "User rating system"
            ]
        },
        skills: ["React", "Redux", "Tailwind CSS", "Node.js", "MongoDB"],
        github: "https://github.com/IshantSomani/TechTrove",
        demo: "https://techtrove-six.vercel.app/",
        image: techtroveImage
    },
    {
        title: "Ai Video Script Generator",
        description: {
            "overview": "AI-powered video script creation tool with OCR capabilities",
            "features": [
                "OpenAI API integration",
                "Multi-source input (text, URLs, files)",
                "OCR for image/PDF processing",
                "Script version management",
                "Export capabilities"
            ]
        },
        skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Python", "Flask"],
        github: "https://github.com/IshantSomani/ai_video_script_generator",
        image: aiVideoScriptGeneratorImage
    },
    {
        title: "Vespera AI",
        description: {
            "overview": "AI Story Generation Platform with React frontend and Flask backend",
            "features": [
                "Creative story generation",
                "User input customization",
                "Story archiving system",
                "Multi-format export",
                "Interactive preview"
            ]
        },
        skills: ["React", "Tailwind CSS", "Python", "Flask", "MongoDB"],
        github: "https://github.com/IshantSomani/Vespera-AI",
        demo: "https://vespera-ai.vercel.app/",
        image: vesperaAIImage
    },
    {
        title: "Password Manager",
        description: {
            "overview": "Secure MERN Stack Password Management Solution",
            "features": [
                "Military-grade encryption",
                "Cross-platform sync",
                "Password strength analyzer",
                "Two-factor authentication",
                "Secure sharing"
            ]
        },
        skills: ["React", "Redux", "Tailwind CSS", "Node.js", "MongoDB"],
        github: "https://github.com/IshantSomani/Password-Manager",
        demo: "https://password-manager-nine-chi.vercel.app/",
        image: passwordManagerImage
    },
    {
        title: "Notes App",
        description: {
            "overview": "Feature-rich Note Taking Application",
            "features": [
                "Rich text editing",
                "Cloud synchronization",
                "Note categorization",
                "Search functionality",
                "Multi-device support"
            ]
        },
        skills: ["React", "Redux", "Tailwind CSS", "Node.js", "MongoDB"],
        github: "https://github.com/IshantSomani/Notes-App",
        demo: "https://notes-app-pearl-delta.vercel.app/",
        image: notesAppImage
    }
];

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(2);
    const showMoreButton = projects.length > visibleProjects;

    const toggleProjects = () => {
        setVisibleProjects(prev => showMoreButton ? prev + 2 : 2); 
    };


    const loader = useMemo(() => (
        <div className="flex justify-center items-center h-screen" role="status" aria-live="polite">
            <CircleLoader color="#000" loading size={50} speedMultiplier={1} />
            <span className="sr-only">Loading projects...</span>
        </div>
    ), []);

    return (
        <>
            <section id="projects" className="mb-10" aria-label="Projects section">
                <div className="staggered-fade-in">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-12 after:h-1 after:bg-blue-900">
                        Featured Projects
                    </h2>
                </div>


                <div className="staggered-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.slice(0, visibleProjects).map((project) => (

                            <div
                                key={project.title}
                                className="group relative bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full rounded-lg border-b-4 border-black/80"
                            >
                                <figure className="relative bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden h-fit">
                                    <div className="relative w-full overflow-hidden pt-[56.25%]">
                                        <img
                                            src={project.image}
                                            alt={`Screenshot of ${project.title} project`}
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            width={640}
                                            height={360}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                                </figure>

                                <div className="p-6 flex flex-col flex-grow">
                                    <header className="mb-1">
                                        <h3
                                            id={`project-${project.title.replace(/\s+/g, '-').toLowerCase()}-title`}
                                            className="text-xl font-bold text-gray-900 mb-2 flex items-center"
                                        >
                                            {project.title}
                                            <span className="ml-2 inline-block h-2 w-2 bg-green-400 rounded-full group-hover:animate-pulse" aria-hidden="true" />
                                        </h3>
                                    </header>

                                    <div className="project-description mb-4">
                                        <h4 className="font-semibold mb-2">{project.description.overview}</h4>
                                        <ul className="list-disc pl-5">
                                            {project.description.features.map((feature, index) => (
                                                <li key={index} className="mb-1">{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 bg-neutral-900 text-white text-xs font-medium rounded"
                                                aria-label={`Technology used: ${skill}`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons Container */}
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-3">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-all duration-200 border border-gray-200 hover:border-gray-300"
                                                        aria-label="View source code on GitHub"
                                                    >
                                                        <SiGithub className="w-6 h-6 mr-2" />
                                                        Code
                                                    </a>
                                                )}

                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-4 py-2 bg-neutral-800 hover:bg-neutral-900 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                                                        aria-label="View live demo"
                                                    >
                                                        <BiLink className="w-6 h-6 mr-2" />
                                                        Demo
                                                    </a>
                                                )}
                                            </div>

                                            {project.apk && (
                                                <a
                                                    href={project.apk}
                                                    download
                                                    className="inline-flex items-center px-3 py-2 text-neutral-500 hover:text-neutral-600 transition-colors group"
                                                    aria-label="Download Android application package"
                                                >
                                                    <BiDownload className="w-6 h-6 mr-2 group-hover:animate-bounce" />
                                                    <span className="text-sm font-medium">APK</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {projects.length > 2 && (
            <div className="mt-10 text-center">
              <button
                onClick={toggleProjects}
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gray-800 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                aria-expanded={!showMoreButton}
                aria-controls="projects-container"
              >
                {showMoreButton ? (
                  <>
                    <FaAngleDown className="w-5 h-5 mr-2" />
                    Show More Projects
                  </>
                ) : (
                  <>
                    <FaAngleUp className="w-5 h-5 mr-2" />
                    Show Fewer Projects
                  </>
                )}
              </button>
            </div>
          )}
                </div>
            </section>

            <Suspense fallback={loader}>
                <CertificatesSection />
            </Suspense>

        </>
    );
};

export default Projects