import React from 'react';

const Hero = () => {
    return (
        <section id="home" style={{
            height: '80vh',
            background: 'linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.8)), url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center'
        }}>
            <div className="hero-content">
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Johnson Grammar School</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Excellence in Education | ICSE Curriculum</p>
                <a href="#admissions" className="btn btn-primary">Admissions Open 2024-25</a>
                <div style={{ marginTop: '2rem' }}>
                    <a href="#parent-login" style={{ color: 'white', textDecoration: 'underline' }}>Parent Login</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
