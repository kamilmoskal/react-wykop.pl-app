import React, { Component } from 'react';
import './WatchNews.scss';
import NewsPreview from '../../components/NewsPreview/NewsPreview';
import SideBar from '../SideBar/SideBar';
import NewsInfoSide from '../../components/NewsInfoSide/NewsInfoSide';
import WatchNewsRelated from '../../components/WatchNewsRelated/WatchNewsRelated';
import WatchNewsComments from '../../components/WatchNewsComments/WatchNewsComments';
import PaginationBar from '../../components/PaginationBar/PaginationBar';
import { connect } from 'react-redux';
import { getSpecificNews, getRelatedSpecificNews } from '../../actions/getSpecificNewsAction';

class WatchNews extends Component {
    componentDidMount(){
        this.props.getSpecificNews(this.props.match.params.id); 
        this.props.getRelatedSpecificNews(this.props.match.params.id); 
    }
    render() {
        const { newsItem, newsRelated } = this.props
        return (
            
            <div className="container">
                <div className="watch-news-grid">
                    <div className="watch-news-grid__left">
                        {newsItem && <NewsPreview news={newsItem} watchmode={true}/>}
                        {newsRelated && newsRelated.length > 0 ? <WatchNewsRelated related={newsRelated}/> : null}
                        {newsItem && <WatchNewsComments news={newsItem}/>}
                        <PaginationBar />
                    </div>
                    <div className="watch-news-grid__right">
                        {newsItem && <NewsInfoSide news={newsItem}/>}
                        <SideBar />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       newsItem: state.newsItem,
       newsRelated: state.newsRelated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSpecificNews: (id) => { dispatch(getSpecificNews(id)) },
        getRelatedSpecificNews: (id) => { dispatch(getRelatedSpecificNews(id)) }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(WatchNews);
