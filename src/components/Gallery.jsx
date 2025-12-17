import React from 'react';

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1577896335477-018408a719c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1427504743050-dad87e916c62?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    ];

    return (
        <section id="gallery" className="section" style={{ background: '#fafafa' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Beyond Academics</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1rem'
                }}>
                    {images.map((img, index) => (
                        <div key={index} style={{ height: '250px', borderRadius: '8px', overflow: 'hidden' }}>
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
