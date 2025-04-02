import { memo, useMemo } from "react";
import { FiExternalLink } from "react-icons/fi";
import { certificates } from '../assets/assets'
import Footer from "./Footer";

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
                    <div className="animate-marquee flex gap-8 w-max">
                            {duplicatedCertificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group relative p-6 bg-white/80 shadow-lg transform transition-all duration-300 ease-out min-w-[400px] bottom-border hover:shadow-xl hover:-translate-y-1"
                                //    className="group relative bg-white/80 border border-gray-100 rounded-2xl p-6 w-[420px] hover:border-gray-200 hover:bg-white hover:shadow-lg"
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
                                            <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                                                {cert.name}
                                            </h3>
                                            <div className="flex justify-between items-start">
                                                <p className="text-sm font-medium text-gray-600">
                                                    {cert.issuer}
                                                </p>
                                                <p className="text-sm text-gray-400 mt-1">
                                                    {cert.issueDate}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <a
                                            href={cert.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${cert.name} certificate`}
                                            className="inline-flex items-center text-blue-950 hover:text-blue-800 text-sm font-medium transition-all group/link"
                                        >
                                            <span className="group-hover/link:underline decoration underline-offset-4">
                                                Verify Credential
                                            </span>
                                            <FiExternalLink className="ml-2 w-4 h-4 flex-shrink-0 translate-y-px" />
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

            <Footer />
        </>
    )
});

export default Certificates