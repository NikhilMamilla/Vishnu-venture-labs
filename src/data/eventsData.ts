export interface EventData {
    id: number;
    title: string;
    timeline: string; // "Posted X ago"
    date?: string; // Exact date if available
    type?: string;
    location?: string;
    description: string;
    image: string;
    host?: string;
    role?: string;
    achievement?: string;
    collaborators?: string[];
    hashtags?: string[];
    contacts?: string[];
    engagement?: string;
    highlights?: string[];
    commitment?: string;
    programDetails?: {
        milestones?: { name: string; date: string }[];
        themes?: string[];
        activities?: string[];
        offerings?: string[];
        features?: string[];
        focusAreas?: string[];
    };
    links?: {
        label: string;
        url: string;
    }[];
}

export const eventsData: EventData[] = [
    {
        "id": 1,
        "title": "Impulse 2025 – VVLF at the Social Entrepreneurship Showcase",
        "timeline": "Posted 2 weeks ago",
        "date": "NOT SPECIFIED",
        "type": "Social Entrepreneurship Showcase",
        "host": "Bala Vikasa – Center for Social and Responsible Business",
        "role": "Pre-Impulse Program Partner",
        "description": "Vishnu Venture Labs Foundation (VVLF) participated in Impulse 2025 as a Pre-Impulse Program Partner, supporting young social innovators and strengthening the impact-driven entrepreneurship ecosystem.",
        "highlights": [
            "VVLF-supported startup Nirvaha selected as a finalist",
            "Guided student innovators through the Pre-Impulse Program",
            "Engaged with NGOs, industry leaders, funders & mentors",
            "Explored new avenues for collaboration in the social impact space"
        ],
        "commitment": "VVLF continues to empower student innovators, support impact-driven ideas, and strengthen the social entrepreneurship ecosystem.",
        "collaborators": [
            "VVLF",
            "Vishnu Foundation TBI",
            "Telangana Innovation Cell",
            "BVRIT",
            "Sri Vishnu Educational Society"
        ],
        "contacts": ["Dr. Sanjay Dubey", "Dr. M.K. Kaushik", "Rohith Sirpa"],
        "image": "/VVLF-Linkedin/impulse2025.jpg"
    },
    {
        "id": 2,
        "title": "Project SAARTHIS – Sensitization Session",
        "timeline": "Posted 2 months ago",
        "date": "18 September 2025",
        "type": "Full-day Hands-on Sensitization Session",
        "location": "BV Raju Institute of Technology (BVRIT), Narsapur",
        "description": "VVLF conducted a full-day sensitization workshop under Project SAARTHIS, enabling students to understand real-world accessibility challenges through interactive, empathy-building activities.",
        "highlights": [
            "Students engaged in activities that built empathy, awareness & teamwork",
            "Explored real-world accessibility barriers faced by persons with disabilities",
            "Prepared student teams for Access Audits and upcoming MVP development",
            "Strengthened a student-led, stakeholder-driven approach to inclusive design"
        ],
        "commitment": "Project SAARTHIS aims to build a culture of accessibility innovation and empower students to create inclusive, meaningful solutions.",
        "collaborators": [
            "Vishnu Venture Labs Foundation (VVLF)",
            "BV Raju Institute of Technology (BVRIT)",
            "Kaiteki Innovations",
            "Assistive Technology Lab (BVRIT)"
        ],
        "contacts": ["Dr. M.K Kaushik", "Raghu D"],
        "image": "/VVLF-Linkedin/Sensationsession.jpg"
    },
    {
        "id": 5,
        "title": "Project SAARTHIS – A Year-long Journey in Accessibility Innovation",
        "timeline": "Posted 4 months ago",
        "date": "Full Academic Year 2025",
        "type": "Accessibility & Inclusion Innovation Program",
        "location": "BV Raju Institute of Technology (BVRIT), Narsapur",
        "description": "Project SAARTHIS is a year-long initiative focused on empowering students to build meaningful, accessible, and inclusive solutions for real-world challenges faced by persons with disabilities.",
        "highlights": [
            "Long-term student engagement in accessibility and inclusive design",
            "Hands-on problem exploration with real community challenges",
            "Focus on building impactful, need-based assistive technology solutions",
            "Collaboration between VVLF, BVRIT, AT Lab, and Kaiteki Innovations"
        ],
        "commitment": "VVLF remains dedicated to nurturing student innovators who design with empathy and develop solutions that advance accessibility and inclusion.",
        "collaborators": [
            "Vishnu Venture Labs Foundation (VVLF)",
            "BV Raju Institute of Technology (BVRIT)",
            "Assistive Technology Lab (BVRIT)",
            "Kaiteki Innovations"
        ],
        "contacts": [
            "Dr. M.K Kaushik",
            "Raghu D"
        ],
        "image": "/VVLF-Linkedin/projectSaarthis2.jpg"
    },
    {
        "id": 6,
        "title": "Grassroots Innovators’ Introductory Meet – Medak District",
        "timeline": "Posted 4 months ago",
        "date": "NOT SPECIFIED",
        "type": "Grassroots Innovation & Entrepreneurship Support",
        "location": "BV Raju Institute of Technology (BVRIT), Narsapur",
        "description": "As part of the Telangana Innovation Cell, Govt. of Telangana Host Institute Initiative, VVLF collaborated with BVRIT and the Assistive Technology Lab to support the Innovators’ Introductory Meet, bringing together grassroots innovators from Medak district. The event provided a platform for innovators to share their journeys and explore pathways to scale their solutions through institutional and ecosystem support.",
        "highlights": [
            "Introduced grassroots innovators to the state’s innovation and entrepreneurship ecosystem",
            "Shared stories of local innovations driven by community needs",
            "Explored opportunities for institutional support and real-world impact",
            "Strengthened collaboration between TGIC, BVRIT, and VVLF for inclusive innovation"
        ],
        "commitment": "VVLF is committed to supporting community-driven innovation and enabling grassroots creators to transform ideas into scalable, meaningful solutions.",
        "collaborators": [
            "Vishnu Venture Labs Foundation (VVLF)",
            "BV Raju Institute of Technology (BVRIT)",
            "Assistive Technology Lab (BVRIT)",
            "Telangana Innovation Cell, Govt. of Telangana"
        ],
        "contacts": [
            "Dr. Sanjay Dubey",
            "Sujana Hanumara",
            "Rohith Sirpa",
            "Pandurang M"
        ],
        "image": "/VVLF-Linkedin/innovatorsintroductorymeet.jpg"
    },
    {
        "id": 7,
        "title": "From Idea to Incorporation — OLYNK.AI Makes It Official!",
        "timeline": "Posted 4 months ago",
        "date": "NOT SPECIFIED",
        "type": "Startup Launch & Incubation Success",
        "location": "Vishnu Venture Labs Foundation (VVLF)",
        "description": "OLYNK.AI, a startup incubated at Vishnu Venture Labs Foundation (VVLF), has officially been incorporated. What began as a bold idea to simplify D2C operations has now evolved into a fully developed system built with empathy, grounded in real operational challenges, and prepared to scale.",
        "highlights": [
            "Simplifying complex D2C operational workflows",
            "Transforming chaos into clarity through intelligent tooling",
            "Building practical, team-centered solutions for real business needs",
            "Demonstrating the power of student-driven innovation supported by VVLF"
        ],
        "commitment": "VVLF continues to empower student founders, turning innovative ideas into meaningful, scalable ventures.",
        "collaborators": [
            "Vishnu Venture Labs Foundation (VVLF)",
            "OLYNK.AI"
        ],
        "contacts": [
            "Dr. Sanjay Dubey",
            "Dr. M.K Kaushik",
            "Rohith Sirpa",
            "Sathvik Chennapragada"
        ],
        "image": "/VVLF-Linkedin/olynk.jpg"
    },
    {
        "id": 3,
        "title": "EPICS Cohort – Student Innovation for Community Impact",
        "timeline": "Posted 7 months ago",
        "date": "25 February - 01 May 2025",
        "type": "Student Innovation & Community Impact Program",
        "location": "BV Raju Institute of Technology (BVRIT), Narsapur",
        "description": "VVLF cohosted the EPICS Cohort at BVRIT, guiding multidisciplinary student teams in developing technology-driven solutions for real community challenges.",
        "highlights": [
            "49 student teams worked across themes including HealthTech, AgriTech, EduTech, CleanTech & Sustainable Energy",
            "Cross-year and multidisciplinary collaboration with mandatory inclusion of girl students",
            "Focused on understanding community partners before designing solutions",
            "Milestones included Launch (25 Feb), Mentorship (10 Mar), Phase 1 Evaluations (2–3 Apr), and Final Demo Day (1 May)",
            "41 teams showcased impactful hardware and software prototypes on Demo Day"
        ],
        "commitment": "VVLF continues to mentor young innovators, offering incubation support, seed funding guidance, and a pathway to transform purpose-driven ideas into real-world impact.",
        "collaborators": [
            "Vishnu Venture Labs Foundation (VVLF)",
            "BV Raju Institute of Technology (BVRIT)",
            "Assistive Technology Lab (BVRIT)",
            "IEEESB BVRIT"
        ],
        "contacts": [
            "Dr. Sanjay Dubey",
            "Dr. M.K Kaushik",
            "Sujana Hanumara",
            "Rohith Sirpa",
            "Dr. P Chandra Babu"
        ],
        "image": "/VVLF-Linkedin/Epics-cohort.jpg"
    },
    {
        "id": 4,
        "title": "E-Summit 2025 – Celebrating Student Entrepreneurship",
        "timeline": "Posted 8 months ago",
        "date": "08-09 April 2025",
        "type": "Entrepreneurship Summit",
        "location": "BV Raju Institute of Technology (BVRIT), Narsapur",
        "description": "VVLF participated in E-Summit 2025 at BVRIT, a dynamic celebration of entrepreneurship and student innovation featuring pitching rounds, keynote sessions, panel talks, and hands-on activities designed to inspire future founders.",
        "highlights": [
            "Pitching competitions, keynote talks, panel discussions & startup activities",
            "Industry leaders shared insights that sparked creativity and new ideas",
            "High-energy student participation and campus-wide innovation spirit",
            "Recognized efforts of E-Cell BVRITN and student leadership for organizing the summit",
            "VVLF supported student entrepreneurs in transforming ideas into real-world impact"
        ],
        "commitment": "VVLF continues to fuel student-led entrepreneurship by mentoring founders, enabling innovation, and helping ideas move from concept to impact.",
        "collaborators": [
            "Sri Vishnu Educational Society",
            "BV Raju Institute of Technology (BVRIT)",
            "Vishnu Venture Labs Foundation (VVLF)",
            "E-Cell BVRITN",
            "Telangana Innovation Cell, Govt. of Telangana",
            "Tikaana Living",
            "The Affordable Organic Store",
            "Incubez",
            "CAP Career Advice Point"
        ],
        "contacts": [
            "Dr. Sanjay Dubey",
            "Dr. M.K Kaushik",
            "A L Kishore",
            "Rohith Sirpa"
        ],
        "image": "/VVLF-Linkedin/E-summit-team2025.jpg"
    },
    {
        "id": 8,
        "title": "Entrepreneurship & Innovation as a Career Opportunity – Student Session",
        "timeline": "Posted 9 months ago",
        "date": "12 February 2025, 10:15 AM",
        "type": "Entrepreneurship Awareness Session",
        "location": "BV Raju Institute of Technology (BVRIT)",
        "description": "A successful session on 'Entrepreneurship & Innovation as a Career Opportunity', organized by Vishnu Venture Labs Foundation (VVLF) in collaboration with the Institution’s Innovation Council (IIC) of BVRIT, offered students a deep dive into entrepreneurial thinking, innovation-driven careers, and the evolving startup ecosystem.",
        "highlights": [
            "Insights into mindset, opportunity spotting, and startup pathways",
            "Engaging discussions that encouraged students to think beyond traditional career options",
            "Interactive Q&A and idea-driven conversations",
            "A motivating experience that inspired students to explore innovation-led futures"
        ],
        "commitment": "VVLF remains dedicated to empowering students with the knowledge, mindset, and resources needed to pursue innovation-driven careers and entrepreneurial opportunities.",
        "collaborators": [
            "Vishnu Venture Labs Foundation (VVLF)",
            "BV Raju Institute of Technology (BVRIT)",
            "Institution's Innovation Council (IIC)",
            "Sri Vishnu Educational Society"
        ],
        "contacts": [
            "Dr. Sanjay Dubey",
            "Dr. M.K Kaushik",
            "Rohith Sirpa",
            "Dr. P. Chandra Babu"
        ],
        "image": "/VVLF-Linkedin/Entrepreneurship12thfeb.jpg"
    },
    {
        "id": 9,
        "title": "Pre-Incubation Cohort 1.0 – Innovate. Incubate. Impact.",
        "timeline": "Posted 9 months ago",
        "date": "NOT SPECIFIED (Ongoing)",
        "type": "Pre-Incubation Program Launch",
        "location": "Vishnu Venture Labs Foundation (VVLF), BVRIT Narsapur",
        "description": "Pre-Incubation Cohort 1.0 at Vishnu Venture Labs Foundation (VVLF) invites aspiring innovators to dream big, build bold, and transform ideas into real-world solutions. The program provides hands-on mentorship, resource support, and an empowering startup environment.",
        "highlights": [
            "Expert guidance from mentors and industry professionals",
            "Access to labs, tools, and startup resources",
            "Immersion in a vibrant on-campus innovation ecosystem",
            "Support for converting ideas into prototypes and early-stage ventures"
        ],
        "commitment": "VVLF continues to nurture next-generation entrepreneurs, enabling them to create meaningful impact through innovation and structured incubation support.",
        "collaborators": [
            "Vishnu Venture Labs Foundation (VVLF)",
            "BV Raju Institute of Technology (BVRIT)",
            "Sri Vishnu Educational Society"
        ],
        "contacts": [
            "Dr. Sanjay Dubey",
            "Dr. M.K Kaushik",
            "Rohith Sirpa",
            "Dr. P. Chandra Babu"
        ],
        "image": "/VVLF-Linkedin/Preincubationcohort-1.0.jpg"
    },
    {
        "id": 11,
        "title": "Official Launch of the Vishnu Venture Labs Foundation (VVLF) Logo",
        "timeline": "Posted 10 months ago",
        "date": "NOT SPECIFIED",
        "type": "VVLF Milestone Event",
        "location": "BV Raju Institute of Technology (BVRIT), Narsapur",
        "description": "The official launch of the Vishnu Venture Labs Foundation (VVLF) logo was proudly unveiled by our esteemed Chairman, Sri K. V. Vishnu Raju garu. The new logo represents VVLF's commitment to nurturing innovation, entrepreneurship, and technological excellence.",
        "highlights": [
            "Logo unveiled by Chairman Sri K. V. Vishnu Raju garu",
            "Symbolizes VVLF’s mission to empower young innovators",
            "Represents a strong foundation for startup growth and impact-driven solutions",
            "Milestone moment marking VVLF’s vision for technological advancement and entrepreneurship"
        ],
        "commitment": "VVLF continues to create an ecosystem where student innovators, startups, and researchers can build meaningful solutions to real-world challenges.",
        "collaborators": [
            "BV Raju Institute of Technology (BVRIT)",
            "Sri Vishnu Educational Society",
            "Vishnu Venture Labs Foundation (VVLF)"
        ],
        "contacts": [
            "Dr. Sanjay Dubey",
            "Dr. M.K. Kaushik",
            "Rohith Sirpa",
            "Dr. P. Chandra Babu"
        ],
        "image": "/VVLF-Linkedin/LogoLaunch.jpg"
    },
    {
        "id": 12,
        "title": "Introducing Vishnu Venture Labs Foundation (VVLF)",
        "timeline": "Posted 10 months ago",
        "date": "NOT SPECIFIED",
        "type": "Innovation & Incubation Hub Launch",
        "location": "BV Raju Institute of Technology (BVRIT), Narsapur",
        "description": "BV Raju Institute of Technology (BVRIT) proudly announces the launch of the Vishnu Venture Labs Foundation (VVLF), an innovation and incubation hub dedicated to turning ideas into impactful ventures. VVLF provides a vibrant platform for students, faculty, and aspiring entrepreneurs to innovate, prototype, and build sustainable tech-driven solutions.",
        "highlights": [
            "A dedicated platform to nurture creativity, research, and innovation",
            "State-of-the-art engineering and prototyping facilities",
            "Access to mentorship, funding pathways, and industry networks",
            "Support for building sustainable, technology-led startups"
        ],
        "commitment": "VVLF aims to empower the next generation of innovators and entrepreneurs, helping them create solutions that contribute to a self-reliant and future-ready society.",
        "collaborators": [
            "BV Raju Institute of Technology (BVRIT)",
            "Sri Vishnu Educational Society",
            "Vishnu Venture Labs Foundation (VVLF)"
        ],
        "contacts": [
            "Dr. Sanjay Dubey",
            "Dr. M.K. Kaushik",
            "Rohith Sirpa",
            "Dr. P. Chandra Babu"
        ],
        "image": "/VVLF-Linkedin/VishnuVentureLabsFoundation.jpg"
    }
];
