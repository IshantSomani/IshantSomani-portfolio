import { lazy, Suspense, useCallback, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { works } from "../assets/assets";
import Loader from "./Loader";

const SkillsSection = lazy(() => import('./SkillsSection'));

const ExperienceSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDetails = useCallback((index) => {
        setOpenIndex(prev => prev === index ? null : index);
    }, []);

    return (
        <>
            <section id="experience" className="mb-container" aria-label="Experience Section">
                <div className="staggered-fade-in">
                    <h2>Professional Journey</h2>
                </div>

                <div className="staggered-fade-in">
                    <div className="space-y-6">
                        {works.map((work, index) => (
                            <div
                                key={index}
                                className="group relative rounded-lg transition-shadow duration-300 ease-out pt-1 sm:pt-2.5"
                            >
                                <div className="flex gap-5">
                                    <div className="shrink-0">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-xl border-2 bg-black border-blue-50 overflow-hidden">
                                            <img
                                                className="w-8 h-8 object-contain"
                                                alt={work.companyName}
                                                loading="lazy"
                                                src={work.logo}
                                            />

                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <div className="flex justify-between items-start flex-wrap gap-4">
                                            <div>
                                                <h3 className="text-lg tracking-wide sm:text-xl font-bold text-black/85 flex items-center gap-2">
                                                    <a
                                                        href={work.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-gray-950 transition-colors"
                                                        aria-label={`${work.companyName} link`}
                                                    >
                                                        {work.companyName}
                                                    </a>
                                                    <button
                                                        onClick={() => toggleDetails(index)}
                                                        className="text-gray-500 hover:text-gray-700 transition-colors"
                                                        aria-label={`${openIndex === index ? 'Collapse' : 'Expand'} experience details`}
                                                        aria-expanded={openIndex === index}
                                                    >
                                                        {openIndex === index ?
                                                            <FaAngleDown className="w-5 h-5" /> :
                                                            <FaAngleRight className="w-5 h-5" />
                                                        }
                                                    </button>
                                                </h3>
                                                <p className="text-sm text-gray-500 tracking-wide font-medium">{work.title}</p>
                                            </div>
                                            <span className="text-sm text-gray-600 tracking-wide font-medium bg-gray-100 px-3 py-1 rounded-md">
                                                {work.startDate} &ndash; {work.endDate}
                                            </span>
                                        </div>

                                        <div
                                            className={`overflow-hidden transition-all pb-3 duration-300 ease-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                            aria-hidden={openIndex !== index}
                                        >
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {work.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {work.skills.map(skill => (
                                                    <span
                                                        key={skill}
                                                        className="px-2.5 py-1 bg-neutral-900 text-white text-xs font-medium rounded"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Suspense fallback={<Loader />}>
                <SkillsSection />
            </Suspense>
        </>
    );
};

export default ExperienceSection;