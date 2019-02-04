import React, { Component } from 'react';
import './SideBar.scss';
import SideBarHeader from './SideBarHeader/SideBarHeader';
import NewsPreviewSide from '../../components/NewsPreviewSide/NewsPreviewSide';
import CommentPreviewSide from '../../components/CommentPreviewSide/CommentPreviewSide';
import ArchivesSide from '../../components/ArchivesSide/ArchivesSide';
import PopularTagsSide from '../../components/PopularTagsSide/PopularTagsSide';

class SideBar extends Component {
  render() {
    const { pathname } = this.props
    return (
      <React.Fragment>

        {pathname === '/mikroblog' ?
        <div className="side-bar">
          <div className="side-bar__popular-tags">
            <SideBarHeader title="Popularne Tagi"/>
            <PopularTagsSide />
          </div>
        </div>
        : null}

        {pathname === '/hity' ?
        <div className="side-bar">
          <div className="side-bar__archives">
            <SideBarHeader title="Archiwum" secColor={true}/>
            <ArchivesSide />
          </div>
        </div>
        : null}

        {pathname === '/mikroblog' || pathname === '/hity' ?
        <div className="side-bar">
          <div className="side-bar__best-comments">
            <SideBarHeader title="Najlepsze komentarze roku 2019"/>
            <CommentPreviewSide />
            <CommentPreviewSide userRank='one'/>
            <CommentPreviewSide userRank='one'/>
            <CommentPreviewSide userRank='two'/>
            <CommentPreviewSide userRank='two'/>
            <CommentPreviewSide userRank='two'/>
            <CommentPreviewSide userRank='two'/>
          </div>
        </div>
        : null}

        {pathname !== '/hity' ?
        <div className="side-bar">
          <div className="side-bar__recent-popular">
            <SideBarHeader title="ostatnio popularne"/>
            <NewsPreviewSide />
            <NewsPreviewSide />
            <NewsPreviewSide />
            <NewsPreviewSide />
            <NewsPreviewSide />
            <NewsPreviewSide />
            <NewsPreviewSide />
            <NewsPreviewSide />
            <NewsPreviewSide />
          </div>
        </div>
        : null}

      </React.Fragment>

    )
  }
}
export default SideBar;
