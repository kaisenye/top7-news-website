import React from 'react';

// css
import '../css/Home.css';

// components
import TopNews from '../components/TopNews';
import BottomNews from '../components/BottomNews';

const Home = () => {
    return (
        <div className='home'>
            <TopNews />
            <BottomNews />
        </div>
    );
};

export default Home;