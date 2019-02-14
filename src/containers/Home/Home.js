import React, { Component } from 'react';
import './Home.scss';
import TagNav from '../../components/TagNav/TagNav';
import HomeNav from './HomeNav/HomeNav';
import NewsPreview from '../../components/NewsPreview/NewsPreview';
import SideBar from '../SideBar/SideBar';
import CommentsItem from '../../components/CommentsItem/CommentsItem';
import PaginationBar from '../../components/PaginationBar/PaginationBar';
import { connect } from 'react-redux';
import { getNewsList, getSideNewsList } from '../../actions/getNewsListAction';
import { getPostList } from '../../actions/getPostListAction';

class Home extends Component {

  componentDidUpdate(prevProps){
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.fetchNewsList();
    }
  }
  componentDidMount(){
    this.fetchNewsList();
  }
  fetchNewsList(){
    if (this.props.location.pathname === '/'){
      this.props.getNewsList('Links/Promoted/1');
      this.props.getSideNewsList();
    } else if (this.props.location.pathname === '/wykopalisko'){
      this.props.getNewsList('Links/Upcoming/1');
    } else if (this.props.location.pathname === '/hity'){
      this.props.getNewsList('Hits/Week');
    } else if (this.props.location.pathname === '/mikroblog'){
      this.props.getPostList();
    }
  }
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
    const { newsList, newsListSide, postList } = this.props
    
    return (
      <div className="container">
        <div className="home-grid">
            {pathname !== '/mikroblog' ? <TagNav/> : null}
            <div className="home-grid__left">

                <HomeNav title={`${title} :`} items={items} />
                {pathname !== '/mikroblog' ?
                <React.Fragment>
                  { newsList && newsList.slice(0, 10).map((news, index) => {
                    return(
                      <NewsPreview news={news} key={index}/>
                    )
                  })}
                  <PaginationBar />
                </React.Fragment>
                : null}

                {pathname === '/mikroblog' ?
                <React.Fragment>
                  { postList && postList.map((comment, index) => {
                      return(
                        <CommentsItem comment={comment} key={index}/>
                      )
                    })}
                <PaginationBar />
                </React.Fragment>
                : null}
            </div>
            <div className="home-grid__right">
                <SideBar pathname={pathname} newsListSide={newsListSide}/>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      newsList: state.newsList,
      newsListSide: state.newsListSide,
      postList: state.postList,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getNewsList: (which) => { dispatch(getNewsList(which)) },
      getSideNewsList: () => { dispatch(getSideNewsList()) },
      getPostList: () => { dispatch(getPostList()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);