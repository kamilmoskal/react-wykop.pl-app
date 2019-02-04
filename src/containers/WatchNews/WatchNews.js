import React, { Component } from 'react';
import './WatchNews.scss';
import NewsPreview from '../../components/NewsPreview/NewsPreview';
import SideBar from '../SideBar/SideBar';
import NewsInfoSide from '../../components/NewsInfoSide/NewsInfoSide';
import WatchNewsLinked from '../../components/WatchNewsLinked/WatchNewsLinked';

class WatchNews extends Component {
  render() {
    return (
        <div className="container">
            <div className="watch-news-grid">
                <div className="watch-news-grid__left">
                    <NewsPreview watchmode={true}/>
                    <WatchNewsLinked />
                </div>
                <div className="watch-news-grid__right">
                    <NewsInfoSide />
                    <SideBar />
                </div>
            </div>
        </div>
    )
  }
}

export default WatchNews;
