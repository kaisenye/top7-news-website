import React, { useState } from 'react';

// css
import '../css/SubscribeForm.css';

const SubscribeForm = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You would put your form submission logic here
        console.log(`Subscribing email: ${email}`);
    };

    return (
        <div className='subscribe-form-container'>
            <div className="subscribe-form-title">
                Get Your Daily 7
            </div>
            <div className="subscribe-form-subtitle">
                Quick way to get informed
            </div>
            <form onSubmit={handleSubmit} className="subscribe-form">
                <input
                    type="email"
                    placeholder="youemail@domain.com"
                    value={email}
                    onChange={handleEmailChange}
                    className="subscribe-input"
                    required
                />
                <button type="submit" className="subscribe-button">Subscribe</button>
            </form>
        </div>
    );
};

export default SubscribeForm;