import nptel from './nptel.png'
import redhat from './redhat.png'
import grras from './grras.png'

import foreverImage from './forever.png';
import gloryImage from './glory.png';
import techtroveImage from './techtrove.png';
import aiVideoScriptGeneratorImage from './ai_video_script_generator.png';
import passwordManagerImage from './password_manager.png';
import notesAppImage from './notes_app.png';
import vesperaAIImage from './vespera_ai.png';

export const works = [
    {
        companyName: 'GRRAS Solution Pvt. Ltd',
        url: 'https://in.linkedin.com/company/grras-solutions-p-ltd',
        logo: grras,
        title: "Trainee",
        description: 'During my training at Grras Solutions Pvt. Ltd., I enhanced MERN Stack development expertise, through hands-on training in MongoDB, Express.js, React.js, and Node.js to build both front-end and back-end web applications. I gained hands-on experience in developing responsive UIs, integrating RESTful APIs, and managing databases. This opportunity strengthened my problem-solving skills and deepened my passion for full-stack development.',
        skills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs', 'JWT'],
        startDate: 'June 2024',
        endDate: 'July 2024'
    },
]

export const projects = [
    {
        title: "Forever",
        description: {
            "overview": "Full-stack E-Commerce platform providing a seamless online shopping experience, built with React, Node.js, and MongoDB.",
            "features": [
                "Secure user authentication and registration",
                "Product management with search and filter options",
                "Cart and order management system",
                "Admin panel for product and order management",
                "Stripe payment integration for secure transactions",
                "Fully responsive UI for optimal user experience"
            ]
        },
        skills: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "Stripe API", "Cloudinary"],
        github: "https://github.com/IshantSomani/forever",
        demo: "https://forever-steel-three.vercel.app/",
        image: foreverImage
    },
    {
        title: "TechTrove",
        description: {
            "overview": "AI Tool Showcase Platform with React, Node.js, and MongoDB.",
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
        title: "Ai Video Script Generator",
        description: {
            "overview": "AI-powered video script creation tool with OCR capabilities",
            "features": [
                "Groq API integration",
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


export const certificates = [
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