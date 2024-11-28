import React from 'react';
import './about.css';


const About = () => {
    return (
        <section id="about" className="section">
            <div className="about-section">
                <div className="about-text">
                    <h2>About Us</h2>
                    <h3>WE ARE CHANGING THE WAY PEOPLE THINK ABOUT GETTING ONLINE LEGAL & TAXATION SERVICES</h3>
                    <p>
                        Mundra Legal Consultants LLP is an online platform dedicated to answering all your legal and tax-related questions...
                    </p>
                    <ul className="features-list">
                        <li>Timely and accurate reporting</li>
                        <li>Access to professionals</li>
                        <li>Mundra legal consultants LLP is our offices</li>
                        <li>Innovative problems solver</li>
                    </ul>
                    <a href="#onlineconsultant"><button className="quote-button">Read More</button></a>
                </div>
                <div className="about-image">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.Dwp6eyS6LPW6bH-QLXRr_QHaES&pid=Api&P=0&h=180" alt="Team Image" width= "60%" />
                </div>
            </div>
        </section>
    );
};

export default About;