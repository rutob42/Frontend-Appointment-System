// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-sections">
                    {/* Contact Section */}
                    <div className="footer-section">
                        <h4 className="section-title">Contact</h4>
                        <ul>
                            <li><a href="mailto:info@example.com">info@example.com</a></li>
                            <li><a href="tel:+1234567890">+123 456 7890</a></li>
                            <li><a href="/contact">Contact Page</a></li>
                        </ul>
                    </div>

                    {/* Useful Links Section */}
                    <div className="footer-section">
                        <h4 className="section-title">Links</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="footer-section">
                        <h4 className="section-title">Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="copyright">
                <p>&copy; KIPROP L. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
