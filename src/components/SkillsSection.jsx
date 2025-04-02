import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiCss3, DiHtml5, DiJavascript1 } from 'react-icons/di';
import { SiAndroid, SiDjango, SiExpress, SiFlask, SiFlutter, SiGit, SiGithub, SiMongodb, SiPython, SiRedux, SiTailwindcss, SiVercel } from 'react-icons/si';
import { CircleLoader } from 'react-spinners';
import { lazy, Suspense, useMemo } from 'react';

const ProjectsSection = lazy(() => import('./ProjectsSection'));

const skills = [
    { name: 'HTML', icon: <DiHtml5 />, color: 'text-orange-500' },
    { name: 'CSS', icon: <DiCss3 />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <DiJavascript1 />, color: 'text-yellow-400' },
    { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
    { name: 'Redux', icon: <SiRedux />, color: 'text-purple-500' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
    { name: 'REST APIs', icon: <SiExpress />, color: 'text-gray-400' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
    { name: 'Flutter', icon: <SiFlutter />, color: 'text-blue-400' },
    { name: 'Android', icon: <SiAndroid />, color: 'text-emerald-500' },
    { name: 'Python', icon: <SiPython />, color: 'text-blue-300' },
    { name: 'Django', icon: <SiDjango />, color: 'text-green-700' },
    { name: 'Flask', icon: <SiFlask />, color: 'text-gray-300' },
    { name: 'Git', icon: <SiGit />, color: 'text-orange-600' },
    { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-200' },
    { name: 'Vercel', icon: <SiVercel />, color: 'text-white' },
];

const SkillsSection = () => {
    const loader = useMemo(() => (
        <div className="flex justify-center items-center h-screen">
            <CircleLoader color="#000" loading size={50} speedMultiplier={1} />
            <span className="sr-only">Loading Skills...</span>
        </div>
    ), []);

    return (
        <>
            <section
                id="skills"
                className="mb-container"
                aria-label="Technical Skills"
            >
                <div className="staggered-fade-in">
                    <h2>Technical Expertise</h2>
                </div>

                <div className="staggered-fade-in">
                    <ul className="flex items-center justify-start flex-wrap list-none p-0 gap-3">
                        {skills.map((skill) => (
                            <li
                                key={skill.name}
                                className="group relative bg-neutral-950 text-white rounded-lg hover:bg-neutral-900 shadow hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 flex-shrink-0"
                                aria-label={`${skill.name} skill`}
                            >
                                <div className="flex items-center gap-2 p-3 px-3.5">
                                    <div className={`text-2xl ${skill.color || 'text-gray-100'} transition-colors group-hover:text-opacity-80`}>
                                        {skill.icon}
                                    </div>
                                    <span className="text-sm font-medium text-gray-100 text-center">
                                        {skill.name}
                                    </span>
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <Suspense fallback={loader}>
                <ProjectsSection />
            </Suspense>
        </>
    );
};

export default SkillsSection;