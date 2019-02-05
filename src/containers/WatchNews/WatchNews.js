import React, { Component } from 'react';
import './WatchNews.scss';
import NewsPreview from '../../components/NewsPreview/NewsPreview';
import SideBar from '../SideBar/SideBar';
import NewsInfoSide from '../../components/NewsInfoSide/NewsInfoSide';
import WatchNewsLinked from '../../components/WatchNewsLinked/WatchNewsLinked';
import WatchNewsComments from '../../components/WatchNewsComments/WatchNewsComments';
import PaginationBar from '../../components/PaginationBar/PaginationBar';

class WatchNews extends Component {
    
  render() {
      console.log(this.props)
    return (
        <div className="container">
            <div className="watch-news-grid">
                <div className="watch-news-grid__left">
                    {/* <NewsPreview watchmode={true}/> */}
                    <WatchNewsLinked />
                    <WatchNewsComments />
                    <PaginationBar />
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
