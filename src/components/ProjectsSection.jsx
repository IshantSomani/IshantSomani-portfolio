import { lazy, Suspense, useState } from 'react';
import Loader from './Loader'
import { BiDownload, BiLink } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { projects } from '../assets/assets';

const CertificatesSection = lazy(() => import('./CertificatesSection'));


const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(2);
    const showMoreButton = projects.length > visibleProjects;

    const toggleProjects = () => {
        setVisibleProjects(prev => showMoreButton ? prev + 2 : 2);
    };

    return (
        <>
            <section id="projects" className="mb-container" aria-label="Projects section">
                <div className="staggered-fade-in">
                    <h2>Featured Projects</h2>
                </div>


                <div className="staggered-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.slice(0, visibleProjects).map((project) => (

                            <div
                                key={project.title}
                                className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full bottom-border"
                            >
                                <figure className="relative bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden h-[9.26rem]">
                                    <div className="relative w-full overflow-hidden pt-[56.25%]">
                                        <img
                                            src={project.image}
                                            alt={`Screenshot of ${project.title} project`}
                                            loading="lazy"
                                            className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
                                            width={640}
                                            height={350}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                                </figure>

                                <div className="p-6 flex flex-col flex-grow">
                                    <header className="mb-1">
                                        <h3
                                            id={`project-${project.title.replace(/\s+/g, '-').toLowerCase()}-title`}
                                            className="text-xl font-bold text-gray-900 mb-2 flex items-center tracking-wide"
                                        >
                                            {project.title}
                                            <span className="ml-2 inline-block h-2 w-2 bg-green-400 rounded-full group-hover:animate-pulse" aria-hidden="true" />
                                        </h3>
                                    </header>

                                    <div className="project-description mb-4 tracking-wide">
                                        <h4 className="font-semibold mb-2">{project.description.overview}</h4>
                                        <ul className="list-disc pl-5 overflow-auto h-[8.8rem]">
                                            {project.description.features.map((feature, index) => (
                                                <li key={index} className="mb-1">{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 bg-neutral-900 text-white text-xs font-medium rounded tracking-wide w"
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
                                                        className="inline-flex items-center px-3 py-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 rounded-lg transition-all text-sm gap-2"
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
                                                        className="inline-flex tracking-wide items-center px-4 py-2 bg-neutral-800 hover:bg-neutral-900 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
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
                                                    className="inline-flex tracking-wide items-center px-3 py-2 text-neutral-500 hover:text-neutral-600 transition-colors group"
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
                                className="flex place-self-center items-end gap-3 tracking-wide text-base font-medium cursor-pointer"
                                aria-expanded={!showMoreButton}
                                aria-controls="projects-container"
                            >
                                {showMoreButton ? (
                                    <>
                                        <span>See More</span>
                                        <FaAngleDown className="w-5 h-5" />
                                    </>
                                ) : (
                                    <>
                                        <span>See Less</span>
                                        <FaAngleUp className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Suspense fallback={<Loader />}>
                <CertificatesSection />
            </Suspense>

        </>
    );
};

export default Projects