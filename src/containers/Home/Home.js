import React, { Component } from 'react';
import './Home.scss';
import TagNav from '../../components/TagNav/TagNav';
import { Container } from 'semantic-ui-react';
import HomeNav from './HomeNav/HomeNav';
import NewsPreview from '../../components/NewsPreview/NewsPreview';
import SideBar from '../SideBar/SideBar';

class Home extends Component {
  render() {
    const { pathname } = this.props.location
    let title = null;
    let items = null;
    if (pathname === '/') {
      title = 'Strona główna';
      items = ['najnowsze','aktywne','ulubione'];
    } else if (pathname === '/wykopalisko'){
      title = 'Wykopalisko';
      items = ['aktywne','najnowsze','wykopywane','komentowane'];
    } else if (pathname === '/hity'){
      title = 'Hity';
      items = ['dnia','tygodnia','miesiąca','roku'];
    } else if (pathname === '/mikroblog'){
      title = 'Mikroblog';
      items = ['wszystkie wpisy','aktywne','gorące dyskusje','ulubione'];
    }

    return (
      <Container>
        <div className="home-grid">
            {pathname !== '/mikroblog' ? <TagNav/> : null}
            <div className="home-grid__left">
                <HomeNav title={`${title} :`} items={items} />
                <NewsPreview />
                <NewsPreview />
                <NewsPreview />
                <NewsPreview />
                <NewsPreview />
                <NewsPreview />
            </div>
            <div className="home-grid__right">
                <SideBar pathname={pathname}/>
            </div>
        </div>
      </Container>
    )
  }
}

export default Home;