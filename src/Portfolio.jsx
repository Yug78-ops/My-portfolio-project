import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const personalInfo = {
        name: "Yug Adhikari",
        title: "AI Information Management | Data Scientist | Web Developer",
        email: "adhikariyug2006@gmail.com",
        phone: "+977 9745663374",
        location: "Sinamangal-9, Kathmandu, Nepal",
        github: "https://github.com/Yug78-ops",
        linkedin: "https://linkedin.com/in/yug-adhikari/"
    };

    const skills = [
        { name: "React" },
        { name: "JavaScript" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Machine Learning" },
        { name: "TensorFlow" },
        { name: "Node.js" },
        { name: "Git" },
        { name: "Python" },
        { name: "SQL" },
    ];

    const projects = [
        {
            id: 1,
            title: "Customer Service Chatbot",
            description: "A full-stack RAG online chatbot for business customer service, built for efficiency.",
            technologies: ["Python", "HTML", "CSS", 'RAG', 'Flask', "Javascript"],
            link: "https://github.com/Yug78-ops/customer-service-chatbot",
        },
        {
            id: 2,
            title: "Format Flow CV Builder",
            description: "A tool to standardize and build CV formats, simplifying the creation process.",
            technologies: ["JavaScript", "HTML", "CSS", "API"],
            link: "https://github.com/Yug78-ops/format-flow-cv",
        },
        {
            id: 3,
            title: "Document Classification and Text Extraction",
            description: "An application providing a web-based interface for two document processing tasks.",
            technologies: ["Tesseract OCR", "TensorFlow/Keras"],
            link: "https://github.com/stha-sanket/Team_Textify",
        },
    ];

    const experiences = [
        {
            id: 1,
            title: "Data Scientist Intern",
            company: "Tech Solutions Inc.",
            year: "Jan 2024 - Present",
            responsibilities: [
                "Developed and implemented machine learning models for customer behavior prediction.",
                "Utilized Python and Pandas for data cleaning and analysis.",
                "Collaborated with the engineering team to deploy models into production."
            ]
        },
        {
            id: 2,
            title: "Web Development Intern",
            company: "Creative Digital Agency",
            year: "Jun 2023 - Dec 2023",
            responsibilities: [
                "Built and maintained responsive front-end components using React and CSS.",
                "Contributed to an e-commerce platform by integrating new features.",
                "Managed code with Git and participated in weekly code reviews."
            ]
        }
    ];

    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "University of Technology",
            year: "2025-Current",
            gpa: "Not Graduated Yet"
        },
        {
            degree: "High School (+2 Management)",
            school: "Global College of Management",
            year: "2022-2024",
            gpa: "3.56/4.0"
        },
        {
            degree: "Secondary Education (SEE)",
            school: "Rosebud School",
            year: "2018",
            gpa: "3.3/4.0"
        }
    ];

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // You would typically handle form submission here, e.g., by sending data to a server
        alert("Thank you for your message!");
        setFormData({ name: '', email: '', message: '' }); // Clear form
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'about':
                return (
                    <section className="content-section fade-in">
                        <h2 className="section-title">About Me</h2>
                        <div className="text-content">
                            <p>
                                As a passionate data science and computing student with a deep interest in Data Science and Artificial Intelligence, I am dedicated to mastering the skills necessary to excel in this rapidly evolving field. I thrive on solving complex challenges and am driven by a desire to apply AI and data science to real-world problems. Whether it's through academic projects, internships, collaborative work or by participating in different types of tech related programs and competitions. I am always seeking opportunities to learn and grow.
                            </p>
                            <p>
                                My goal is to contribute to innovative projects that harness the power of AI to make a meaningful impact. I am particularly interested in areas such as data science and machine learning and of course, my academic journey has equipped me with a solid understanding of machine learning algorithms, data analysis, and the principles of AI which will help me a lot further.
                            </p>
                        </div>
                    </section>
                );

            case 'skills':
                return (
                    <section className="content-section fade-in">
                        <h2 className="section-title">Skills</h2>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-name">{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            case 'projects':
                return (
                    <section className="content-section fade-in">
                        <h2 className="section-title">Projects</h2>
                        <div className="projects-grid">
                            {projects.map(project => (
                                <div key={project.id} className="card project-card">
                                    <div className="project-details">
                                        <h3 className="card-title">{project.title}</h3>
                                        <p className="card-description">{project.description}</p>
                                        <div className="tech-tags">
                                            {project.technologies.map((tech, index) => (
                                                <span key={index} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                        <a href={project.link} className="card-link" target="_blank" rel="noopener noreferrer">
                                            View on GitHub
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            case 'experience':
                return (
                    <section className="content-section fade-in">
                        <h2 className="section-title">Experience</h2>
                        {experiences.map(exp => (
                            <div key={exp.id} className="card experience-card">
                                <h3 className="card-title">{exp.title}</h3>
                                <p className="experience-company-year">{exp.company} | {exp.year}</p>
                                <ul>
                                    {exp.responsibilities.map((resp, index) => (
                                        <li key={index}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                );

            case 'education':
                return (
                    <section className="content-section fade-in">
                        <h2 className="section-title">Education</h2>
                        {education.map((edu, index) => (
                            <div key={index} className="card education-card">
                                <h3 className="card-title">{edu.degree}</h3>
                                <p className="education-school">{edu.school}</p>
                                <p className="education-year">{edu.year}</p>
                                <p className="education-gpa">GPA: {edu.gpa}</p>
                            </div>
                        ))}
                    </section>
                );

            case 'contact':
                return (
                    <section className="content-section fade-in">
                        <h2 className="section-title">Contact</h2>
                        <div className="contact-info">
                            <p><strong>Email:</strong> <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
                            <p><strong>Phone:</strong> {personalInfo.phone}</p>
                            <p><strong>Location:</strong> {personalInfo.location}</p>
                            <p><strong>GitHub:</strong> <a href={personalInfo.github}>{personalInfo.github}</a></p>
                            <p><strong>LinkedIn:</strong> <a href={personalInfo.linkedin}>{personalInfo.linkedin}</a></p>
                        </div>
                        <div className="contact-form-container">
                            <h3 className="form-title">Send Me a Message</h3>
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    rows="5"
                                    required
                                ></textarea>
                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
                        </div>
                    </section>
                );

            default:
                return null;
        }
    };

    return (
        <div className="portfolio-container">
            <header className="hero-section">
                <div className="intro-container">
                    <div className="profile-image-container">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D35AQFV2qdIhKLoKA/profile-framedphoto-shrink_200_200/B4DZYHCZF.H4Ak-/0/1743874790046?e=1758542400&v=beta&t=2Qw9KYtV9pjllyIGBiTNxHVyDmZ5fOio_4YhvY4VCTo"
                            alt="Yug Adhikari"
                            className="profile-image"
                        />
                    </div>
                    <div className="text-content">
                        <p className="portfolio-tag">Personal Portfolio</p>
                        <h1 className="name cursive-name">{personalInfo.name}</h1>
                        <p className="title">{personalInfo.title}</p>
                    </div>
                </div>
            </header>

            <nav className="nav">
                {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map(section => (
                    <button
                        key={section}
                        className={`nav-button ${activeSection === section ? 'active' : ''}`}
                        onClick={() => setActiveSection(section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </nav>

            <main className="main-content">
                {renderContent()}
            </main>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Portfolio;