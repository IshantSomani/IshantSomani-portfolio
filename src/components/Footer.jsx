import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const contactOptions = [
    {
        id: 1,
        href: "mailto:ishantsomani2003@gmail.com",
        label: "Send email",
        icon: <HiOutlineMail className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />,
        text: "ishantsomani2003@gmail.com",
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600"
    },
    {
        id: 2,
        href: "tel:+919928271130",
        label: "Call phone number",
        icon: <HiOutlinePhone className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors" />,
        text: "+91 99282 71130",
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600"
    },
    {
        id: 3,
        href: "https://www.linkedin.com/in/ishant-somani-973492217/",
        label: "Visit LinkedIn profile",
        icon: <FaLinkedin className="w-6 h-6 text-[#0077b5] group-hover:text-[#005f8d] transition-colors" />,
        text: "LinkedIn",
        bgColor: "bg-blue-100",
        iconColor: "text-[#0077b5]"
    },
];

const Footer = () => {
    return (
        <footer className="mb-container" aria-label="Direct Contact Options">
            <div className="staggered-fade-in max-w-4xl mx-auto">
                <h2>Direct Contact Options</h2>

                <div className="staggered-fade-in flex justify-center flex-wrap items-center gap-6 sm:gap-8 bg-white border-l-3 border-black/80 p-4 rounded-lg shadow">
                    {contactOptions.map((option) => (
                        <a
                            key={option.id}
                            href={option.href}
                            className="flex items-center gap-3 font-medium tracking-wide group transition-all"
                            aria-label={option.label}
                        >
                            <div className={`size-9 ${option.bgColor} rounded-lg flex justify-center items-center`}>
                                {option.icon}
                            </div>
                            <p className='text-slate-900 text-sm hover:text-gray-700 transition-colors'>
                                {option.text}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
