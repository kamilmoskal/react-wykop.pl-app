import React from 'react';
import './HomeGrid.scss';
import { Container } from 'semantic-ui-react';
import HomeGridNav from './HomeGridNav/HomeGridNav';
import NewsPreview from '../NewsPreview/NewsPreview';
import SideBar from '../../containers/SideBar/SideBar';

const HomeGrid = () => {
    return (
        <Container>
            <div className="home-grid">
                <div className="home-grid__left">
                    <HomeGridNav title='Strona główna :' items={['najnowsze','aktywne','ulubione']} />
                    <NewsPreview />
                    <NewsPreview />
                    <NewsPreview />
                </div>
                <div className="home-grid__right">
                    <SideBar />
                </div>
            </div>
        </Container>
    )
}

export default HomeGrid;
