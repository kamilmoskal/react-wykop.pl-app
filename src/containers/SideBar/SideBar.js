import React, { Component } from 'react';
import './SideBar.scss';
import SideBarHeader from './SideBarHeader/SideBarHeader';
import NewsPreviewSide from '../../components/NewsPreviewSide/NewsPreviewSide';
import CommentPreviewSide from '../../components/CommentPreviewSide/CommentPreviewSide';

class SideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="side-bar">
          <div className="side-bar__best_comments">
            <SideBarHeader title="Najlepsze komentarze roku 2019"/>
            <CommentPreviewSide />
            <CommentPreviewSide userRank='one'/>
            <CommentPreviewSide userRank='two'/>
            <CommentPreviewSide userRank='two'/>
          </div>
        </div>
        <div className="side-bar">
          <div className="side-bar__recent-popular">
            <SideBarHeader title="ostatnio popularne"/>
            <NewsPreviewSide />
            <NewsPreviewSide />
            <NewsPreviewSide />
          </div>
        </div>
      </React.Fragment>

    )
  }
}
export default SideBar;
