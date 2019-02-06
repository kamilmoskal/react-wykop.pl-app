import React, { Component } from 'react';
import './Home.scss';
import TagNav from '../../components/TagNav/TagNav';
import HomeNav from './HomeNav/HomeNav';
import NewsPreview from '../../components/NewsPreview/NewsPreview';
import SideBar from '../SideBar/SideBar';
import CommentsItem from '../../components/CommentsItem/CommentsItem';
import PaginationBar from '../../components/PaginationBar/PaginationBar';
import { connect } from 'react-redux';
import { getNewsList } from '../../actions/getNewsListAction';

class Home extends Component {

  componentDidUpdate(prevProps){
    if (prevProps.location.pathname !== this.props.location.pathname) {
      if (this.props.location.pathname === '/wykopalisko'){
        this.fetchNewsList('Links/Upcoming/1')
      } else if (this.props.location.pathname === '/hity'){
        this.fetchNewsList('Hits/Week')
      } else if (this.props.location.pathname === '/'){
        this.fetchNewsList('Links/Promoted/1')
      }
    }
  }
  componentDidMount(){
    this.fetchNewsList('Links/Promoted/1')
  }
  fetchNewsList(which){
    this.props.getNewsList(which); 
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
    const { newsList } = this.props
    //console.log(newsList)
    return (
      <div className="container">
        <div className="home-grid">
            {pathname !== '/mikroblog' ? <TagNav/> : null}
            <div className="home-grid__left">

                <HomeNav title={`${title} :`} items={items} />
                {pathname !== '/mikroblog' ?
                <React.Fragment>
                  { newsList && newsList.slice(0, 7).map((news, index) => {
                    return(
                      <NewsPreview news={news} key={index}/>
                    )
                  })}
                  <PaginationBar />
                </React.Fragment>
                : null}

                {pathname === '/mikroblog' ?
                <React.Fragment>
               {/*  <CommentsItem />
                <CommentsItem />
                <CommentsItem />
                <CommentsItem />
                <CommentsItem /> */}
                <PaginationBar />
                </React.Fragment>
                : null}
            </div>
            <div className="home-grid__right">
                <SideBar pathname={pathname}/>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      newsList: state.newsList
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getNewsList: (which) => { dispatch(getNewsList(which)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);