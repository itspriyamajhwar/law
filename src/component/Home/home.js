import React, { useState } from 'react';
import './home.css';


const Home = () => {
   

    return (
        <>
            
            {/* Main Content */}
            <section id="home" className="section">
                <div className="Homecontent">
                    <img 
                        src="https://www.expertlawfirm.com/wp-content/uploads/2023/07/AdobeStock_571762531-1024x585.jpg" 
                        alt="Deenis Law Chamber Logo"  width='70%'
                    />
                    <div className="text">
                        <h2>Welcome to Deenis Law Chamber</h2>
                        <p>
                            At Deenis Law Chamber, we are dedicated to providing comprehensive legal services with a client-focused approach. With years of expertise in various fields of law, our team of professionals is committed to helping individuals, businesses, and organizations navigate complex legal challenges with confidence and clarity.
                        </p>
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to deliver top-notch legal advice and representation tailored to each client's unique needs. We believe in building long-lasting relationships based on trust, transparency, and results.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
