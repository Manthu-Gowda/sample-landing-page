import React from 'react';

const Admissions = () => {
    return (
        <section id="admissions" className="section" style={{ background: 'white' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Admissions Open 2024-25</h2>
                <div style={{
                    background: 'var(--light-blue)',
                    padding: '3rem',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#555' }}>
                        Join the JGS family. We are accepting applications for Pre-Primary to Class IX.
                        Our admission process is designed to be transparent and merit-based.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn btn-primary" style={{ padding: '12px 40px' }}>Apply Online</button>
                        <a href="#contact" className="btn" style={{
                            border: '2px solid var(--primary-color)',
                            color: 'var(--primary-color)'
                        }}>Contact Office</a>
                    </div>
                    <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
                        *Limited seats available for the upcoming academic year.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Admissions;
