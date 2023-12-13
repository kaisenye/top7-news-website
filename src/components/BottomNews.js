import React, { useState, useEffect } from 'react';

// css
import '../css/BottomNews.css';

// hooks
import useFetchNewsArticles from '../hooks/useFetchNewsArticles'; 

const BottomNews = () => {

    const [newsArticles, setNewsArticles] = useState([
        {
            title: 'Chaos In the Skies',
            description: "The labor market is once again showing it's got grit.",
            imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', 
            backgroundColor: '#D6DBE7',
        },
        {
            title: 'Chaos In the Skies',
            description: "The labor market is once again showing it's got grit.",
            imageUrl: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg',
            backgroundColor: '#D9FFD9',
        },
        {
            title: 'Chaos In the Skies',
            description: "The labor market is once again showing it's got grit.",
            imageUrl: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/d-03-4?$pjpeg$&jpegSize=200&wid=720',
            backgroundColor: '#D9D9FF',
        },
        {
            title: 'Chaos In the Skies',
            description: "The labor market is once again showing it's got grit.",
            imageUrl: 'https://scx1.b-cdn.net/csz/news/800a/2017/20-newtechnolog.jpg',
            backgroundColor: '#FFD9D9',
        },
    ])

    // hook: Fetch the news articles and set the background color
    useFetchNewsArticles(newsArticles, setNewsArticles);


    return (
        <div className='bottom-news'>
            {newsArticles.map((article, index) => (
                <div className="bottom-news-item" key={index} style={{ backgroundColor: article.backgroundColor }}>
                    <img src={article.imageUrl} alt={article.title} className="bottom-news-image" />
                    <div className="bottom-news-content">
                        <div className="bottom-news-title">
                            {article.title}
                        </div>
                        <div className="bottom-news-subtitle">
                            {article.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BottomNews;