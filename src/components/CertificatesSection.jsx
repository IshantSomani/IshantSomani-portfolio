import { FiExternalLink } from "react-icons/fi";
import nptel from '../assets/nptel.png'
import redhat from '../assets/redhat.png'
import grras from '../assets/grras.png'
import { memo, useMemo } from "react";

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
                className="mb-10"
                aria-label="Certifications"
            >
                <div className="staggered-fade-in">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-12 after:h-1 after:bg-blue-900">
                        Certifications
                    </h2>
                </div>

                <div className="staggered-fade-in overflow-hidden pb-4">
                    <div className="relative">
                        <div className="animate-marquee flex gap-6 w-max">
                            {duplicatedCertificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out min-w-[400px] rounded-lg border-b-4 border-black/80"
                                >
                                    <div className="flex gap-4">
                                        <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-black overflow-hidden border  border-gray-200">
                                            <img
                                                className={`${cert.issuer.includes('NPTEL') ? 'p-1.5 bg-white' : 'p-2'} w-full h-full object-contain`}
                                                loading="lazy"
                                                alt={`${cert.issuer} logo`}
                                                src={cert.logo}
                                            />
                                        </div>

                                        <div className="flex-1 space-y-2">
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
        </>
    )
});

export default Certificates