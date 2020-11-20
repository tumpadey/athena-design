import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="text-center contact container mt-5">
            <h1 className="font-weight-bold">Get your design right, right now</h1>
            <p>Be the first know our latest offers and updates!</p>
            <div class="input-group d-flex align-items-center contact-input mb-3 p-2 rounded bg-white my-5 contact-input mx-auto">
            <input type="text" class="form-control border-0" placeholder="Enter your email address"/>
            <div class="input-group-append">
                    <button class="contact-btn" type="button">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;