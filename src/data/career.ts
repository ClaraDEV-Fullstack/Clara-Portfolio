export type CareerItem = {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    type: string;
};

export type CareerData = {
    academic: CareerItem[];
    experience: CareerItem[];
};

export const careerData: CareerData = {
    academic: [
        {
            year: '2024',
            title: 'Full-Stack Web & Mobile Development',
            subtitle: 'High Tech Vocational Center',
            description:
                'Comprehensive training in full-stack development with practical implementation of AI-enhanced web and mobile apps. Focus areas include REST API integration, user interface optimization, responsive design, and cloud deployment using modern technologies.',
            type: 'Technical Training & Development',
        },
        {
            year: '2022',
            title: 'MBA in Logistics and Supply Chain',
            subtitle: 'IUGET, Bonamoussadi',
            description: 'Focused on strategic management, logistics optimization, and efficient supply chain systems.',
            type: 'academic',
        },
        {
            year: '2021',
            title: "Bachelor's Degree - Management Sciences",
            subtitle: 'IUC – Institute Universitaire de la Côte',
            description: 'Built strong analytical and leadership foundations with emphasis on organizational management.',
            type: 'academic',
        },
        {
            year: '2021',
            title: 'Graphic Design & Branding',
            subtitle: 'Multicolor – Printing & Design Center',
            description:
                'Learned professional graphic design, layout composition, and digital/industrial printing techniques. Gained strong foundations in branding, logo design, and creative digital media production.',
            type: 'Creative Training',
        },
        {
            year: '2019',
            title: 'HND in Human Resource Management',
            subtitle: 'IUC – Institute Universitaire de la Côte',
            description: 'Developed expertise in employee relations, recruitment, and workplace management strategies.',
            type: 'academic',
        },
    ],
    experience: [
        {
            year: '2025 - Present',
            title: 'Full-Stack Developer',
            subtitle: 'KORYX Technologies',
            description:
                'Developing and maintaining scalable full-stack applications using React, Django, and PostgreSQL. Building responsive user interfaces, RESTful APIs, authentication systems, and high-performance solutions for fintech and sports analytics platforms.',
            type: 'Work Experience',
        },
        {
            year: '2023 - 2024',
            title: 'Full-Stack Web & Mobile Developer',
            subtitle: 'High Tech Vocational Training Center',
            description:
                'Built and deployed production-ready web and mobile applications using modern full-stack technologies. Developed RESTful APIs, authentication systems, and responsive frontend interfaces while collaborating in team-based software development environments.',
            type: 'Professional Training & Real Project Experience',
        },
    ],
};

export const getAcademicCredentials = (): CareerItem[] =>
    careerData.academic.filter((item) => item.type === 'academic');

export const getProfessionalExperience = (): CareerItem[] => careerData.experience;
