import React from 'react';

// css
import '../css/TopNews.css';

// Import images from the assets folder
import image1 from '../assets/img1.png';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.png';


const TopNews = () => {
    return (
        <div className='top-news'>
            <div className="top-news-left">
                <div className="top-news-left-img">
                    <img src={image1} alt="Image 1" />
                </div>
                <div className="top-news-left-title">
                    Chaos In The Skies
                </div>
                <div className="top-news-left-subtitle">
                    The labor market is once again showing it's got grit.
                </div>
            </div>
            <div className="top-news-right">
                <div className="top-news-right-item">
                    <div className="top-news-right-text">
                        <div className="top-news-right-title">
                            First therapy using CRISPR 
                        </div>
                        <div className="top-news-right-subtitle">
                            Previous treatment was limited to bone marrow transplants
                        </div>
                    </div>
                    <div className="top-news-right-img">
                        <img src={image2} alt="Image 2" />
                    </div>
                </div>
                <div className="top-news-right-item">
                    <div className="top-news-right-text">
                        <div className="top-news-right-title">
                            First therapy using CRISPR 
                        </div>
                        <div className="top-news-right-subtitle">
                            Previous treatment was limited to bone marrow transplants
                        </div>
                    </div>
                    <div className="top-news-right-img">
                        <img src={image3} alt="Image 2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNews;