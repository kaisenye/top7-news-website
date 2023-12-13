
import { useEffect } from 'react';
import { FastAverageColor } from 'fast-average-color';
import { lightenHexColor } from '../functions/colorLighter'; // Adjust the import path as necessary

const useFetchNewsArticles = (initialNewsArticles, setNewsArticles) => {
    useEffect(() => {
        const fac = new FastAverageColor();

        Promise.all(initialNewsArticles.map(article => {
            return new Promise(resolve => {
                const img = new Image();
                    img.crossOrigin = 'Anonymous';
                    img.src = article.imageUrl;
                    img.onload = () => {
                    const color = fac.getColor(img);
                    const lightenedColor = lightenHexColor(color.hex, 45); // Lighten by 45%
                    resolve({ ...article, backgroundColor: lightenedColor });
                };
                    img.onerror = () => {
                    resolve({ ...article, backgroundColor: '#FFFFFF' });
                };
            });
        }))
        .then(articlesWithColors => setNewsArticles(articlesWithColors));
    }, [initialNewsArticles, setNewsArticles]);
};

export default useFetchNewsArticles;

