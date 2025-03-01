import nptel from '../assets/nptel.png'
import redhat from '../assets/redhat.png'
import grras from '../assets/grras.png'
import { memo, useMemo } from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const certificates = [
    {
        name: 'MERN Stack Certification',
        issuer: 'GRRAS Solutions',
        url: 'https://drive.google.com/file/d/1Z0ddK7KpomK4-PufZmZKho9SmVp01WoA/preview',
        issueDate: 'July 2024',
        logo: grras,
    },
    {
        name: 'RHCSA',
        issuer: 'RedHat, Jaipur',
        url: 'https://rhtapps.redhat.com/verify?certId=240-209-619',
        issueDate: 'Oct 2024',
        logo: redhat,
    },
    {
        name: 'Python for Data Science',
        issuer: 'NPTEL Online',
        url: 'https://drive.google.com/file/d/1mIeQ7NJ57R22N565RDPMORExbvKIaxRH/preview',
        issueDate: 'Jan-Feb 2024',
        logo: nptel,
    },
    {
        name: 'Introduction To Programming In C',
        issuer: 'NPTEL Online',
        url: 'https://drive.google.com/file/d/1Aawq9B9mc2RqoD0DSipMU5rFEeIf8dhM/preview',
        issueDate: 'Jan-Mar 2023',
        logo: nptel,
    },
    {
        name: 'Data Base Management System',
        issuer: 'NPTEL Online',
        url: 'https://drive.google.com/file/d/1mHYbs7mL-CcCONzZsnUFSRksVcG2MVhV/preview',
        issueDate: 'Aug-Oct 2022',
        logo: nptel,
    },
];

const Certificates = memo(function Certificates() {
    const duplicatedCertificates = useMemo(() => [...certificates, ...certificates], []);

    return (
        <>
            <section id="certificates"
                className="mb-container"
                aria-label="Certifications"
            >
                <div className="staggered-fade-in">
                    <h2>Certifications</h2>
                </div>

                <div className="staggered-fade-in overflow-hidden pb-4">
                    <div className="relative">
                        <div className="animate-marquee flex gap-6 w-max">
                            {duplicatedCertificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group relative p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out min-w-[400px] bottom-border"
                                >
                                    <div className="flex gap-4">
                                        <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-black overflow-hidden border border-gray-200">
                                            <img
                                                className={`${cert.issuer.includes('NPTEL') ? 'p-1.5 bg-white' : 'p-2'} w-full h-full object-contain`}
                                                loading="lazy"
                                                alt={`${cert.issuer} logo`}
                                                src={cert.logo}
                                            />
                                        </div>

                                        <div className="flex-1 tracking-wide space-y-2">
                                            <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                                                {cert.name}
                                            </h3>
                                            <div className="flex justify-between items-start">
                                                <p className="text-sm text-gray-600 font-medium">
                                                    {cert.issuer}
                                                </p>
                                                <span className="text-sm text-gray-500 whitespace-nowrap">
                                                    {cert.issueDate}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <a
                                            href={cert.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${cert.name} certificate`}
                                            className="inline-flex items-center text-blue-950 hover:text-blue-900 text-sm font-medium transition-colors group"
                                        >
                                            <span className="group-hover:underline">Verify Credential</span>
                                            <FiExternalLink className="ml-2 w-4 h-4 flex-shrink-0" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Gradient overlays for better scroll indication */}
                        <div className="absolute top-0 left-0 w-1 sm:w-2 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
                        <div className="absolute top-0 right-0 w-1 sm:w-2 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
                    </div>
                </div>
            </section>

            <footer
                className='mb-container'
                aria-label="Direct Contact Options"
            >
                <div className='staggered-fade-in max-w-4xl mx-auto'>
                    <h2>Direct Contact Options</h2>

                    <div className='staggered-fade-in flex justify-center flex-wrap items-center gap-6 sm:gap-8 bg-white border-l-4 border-black p-4 rounded-lg shadow'>
                        <a
                            href="mailto:ishantsomani2003@gmail.com"
                            className="flex items-center tracking-wide text-blue-600 hover:text-blue-800 transition-all group font-medium"
                            aria-label="Send email"
                        >
                            <HiOutlineMail className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="hover:font-semibold">ishantsomani2003@gmail.com</span>
                        </a>

                        <a
                            href="tel:+919928271130"
                            className="flex items-center tracking-wide text-green-600 hover:text-green-800 transition-all group font-medium"
                            aria-label="Call phone number"
                        >
                            <HiOutlinePhone className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="hover:font-semibold">+91 99282 71130</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/https://www.linkedin.com/in/ishant-somani-973492217/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center tracking-wide text-[#0077b5] hover:text-[#005f8d] transition-all group font-medium"
                            aria-label="Visit LinkedIn profile"
                        >
                            <FaLinkedin className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="hover:font-semibold">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
});

export default Certificates