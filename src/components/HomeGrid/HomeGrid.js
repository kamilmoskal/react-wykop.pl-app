import React from 'react';
import './HomeGrid.scss';
import HomeGridNav from './HomeGridNav/HomeGridNav';
import NewsPreview from '../NewsPreview/NewsPreview';

const HomeGrid = () => {
    return (
        <React.Fragment>
            <HomeGridNav title='Strona główna :' items={['najnowsze','aktywne','ulubione']} />
            <NewsPreview />
        </React.Fragment>
    )
}

export default HomeGrid;
