import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" style={{ background: 'var(--primary-color)', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>

                    {/* Column 1: Contact Info */}
                    <div>
                        <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Contact Us</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>L.B. Nagar Branch:</strong><br />
                            Balaji Nagar, Mansoorabad, Near Kamineni Hospital, Hyderabad - 500068
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Kuntloor Branch:</strong><br />
                            Survey No. 271, Kuntloor, Hayath Nagar Mandal, R.R District - 501505
                        </p>
                        <p>
                            Email: johnson.icselbngr@gmail.com<br />
                            Phone: +91 - 9391551065
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Quick Links</h3>
                        <ul style={{ lineHeight: '2' }}>
                            <li><a href="#home" style={{ color: 'white' }}>Home</a></li>
                            <li><a href="#about" style={{ color: 'white' }}>About Us</a></li>
                            <li><a href="#academics" style={{ color: 'white' }}>Academics</a></li>
                            <li><a href="#admissions" style={{ color: 'white' }}>Admissions</a></li>
                            <li><a href="#parent-login" style={{ color: 'white' }}>Parent Login</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Social/Map placeholder */}
                    <div>
                        <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Connect</h3>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                            {/* Social Icons placeholders */}
                            <div style={{ width: '40px', height: '40px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>F</div>
                            <div style={{ width: '40px', height: '40px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>I</div>
                            <div style={{ width: '40px', height: '40px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>X</div>
                        </div>
                        <p>&copy; 2024 Johnson Grammar School. All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
