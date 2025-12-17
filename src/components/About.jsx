import React from 'react';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'white' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
                <div style={{ flex: '1 1 400px' }}>
                    <img
                        src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                        alt="School Campus"
                        style={{ width: '100%', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    />
                </div>
                <div style={{ flex: '1 1 400px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Us</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>
                        Johnson Grammar School (JGS) is dedicated to providing holistic education with a focus on academic excellence, character building, and physical development.
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#555' }}>
                        Established with a vision to nurture young minds, we offer the ICSE curriculum designed to foster critical thinking and creativity. Our state-of-the-art campuses in L.B. Nagar and Kuntloor provide the perfect environment for learning and growth.
                    </p>
                    <ul style={{ marginBottom: '2rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Experienced Faculty</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Modern Infrastructure</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Values-based Education</li>
                    </ul>
                    <a href="#contact" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </section>
    );
};

export default About;
