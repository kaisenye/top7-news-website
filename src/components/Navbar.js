import React from 'react';

// css
import '../css/Navbar.css';

// compoenents
import SubscribeForm from './SubscribeForm';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-top">
                <div className="navbar-top-logo">
                    TOP7
                </div>
            </div>
            <div className="navbar-bottom">
                <div className="navbar-subscribe-container">
                    <SubscribeForm />
                </div>
                <div className="navbar-date-container">
                    <div className="navbar-date">
                        December
                    </div>
                    <div className="navbar-date">
                        20th
                    </div>
                    <div className="navbar-date">
                        2023
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;