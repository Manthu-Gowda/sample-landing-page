import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="nav-container">
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                JGS
            </div>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
                <a href="#academics" onClick={() => setIsOpen(false)}>Academics</a>
                <a href="#admissions" onClick={() => setIsOpen(false)}>Admissions</a>
                <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>

            <button
                className="menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                ☰
            </button>
        </nav>
    );
};

export default Navbar;
