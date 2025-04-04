import { lazy, Suspense } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineFileDownload } from 'react-icons/md';
import Loader from './Loader';

const ExperienceSection = lazy(() => import('./ExperienceSection'));


const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/IshantSomani',
        icon: <FaGithub />,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ishant-somani-973492217/',
        icon: <FaLinkedin />,
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/somani_ishant',
        icon: <FaInstagram />,
    },
    {
        name: 'Email',
        url: 'mailto:ishantsomani2003@gmail.com',
        icon: <HiOutlineMail />,
    },
    {
        name: 'Resume',
        url: 'https://drive.google.com/file/d/1PRpX0ZS3CqU9MirF-eQDzjDxZOL98Qig/view',
        icon: <MdOutlineFileDownload />,
        download: true,
    },
];

const SocialMediaSection = () => {

    return (
        <>
            <section id="socials" className="mb-container" aria-label="Social Media Section">
                <div className="staggered-fade-in">
                    <h2>Let&apos;s Connect</h2>
                </div>

                <div className="staggered-fade-in">
                    <div className="flex flex-wrap items-center justify-start gap-3">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                download={link.download}
                                className="group relative bg-neutral-950 text-white rounded-lg p-3 hover:bg-neutral-900 shadow-md hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col items-center justify-center gap-2"
                                aria-label={`Connect via ${link.name}`}
                            >
                                <div className="text-xl sm:text-2xl text-gray-100 group-hover:text-gray-200 transition-colors">
                                    {link.icon}
                                </div>
                                <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out bg-neutral-800 px-2 py-1 rounded text-sm whitespace-nowrap">
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Suspense fallback={<Loader />}>
                <ExperienceSection />
            </Suspense>
        </>
    );
};

export default SocialMediaSection;