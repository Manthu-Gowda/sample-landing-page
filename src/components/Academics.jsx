import React from 'react';

const ProgramCard = ({ title, description, image }) => (
    <div style={{
        background: 'white',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{ height: '200px', overflow: 'hidden' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{title}</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>{description}</p>
            <a href="#academics" style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>View Details →</a>
        </div>
    </div>
);

const Academics = () => {
    const programs = [
        {
            title: "Pre-Primary",
            description: "A nurturing environment for our youngest learners to explore and grow.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Primary School",
            description: "Building a strong foundation in literacy, numeracy, and social skills.",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "High School (ICSE)",
            description: "Rigorous academic curriculum preparing students for future success.",
            image: "https://images.unsplash.com/photo-1427504743050-dad87e916c62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="academics" className="section" style={{ background: 'var(--light-blue)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Academic Programs</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                        We provide a comprehensive learning journey from pre-primary to high school, following the ICSE curriculum.
                    </p>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {programs.map((program, index) => (
                        <ProgramCard key={index} {...program} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Academics;
