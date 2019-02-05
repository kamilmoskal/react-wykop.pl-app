import React, { Component } from 'react';
import './WatchNews.scss';
import NewsPreview from '../../components/NewsPreview/NewsPreview';
import SideBar from '../SideBar/SideBar';
import NewsInfoSide from '../../components/NewsInfoSide/NewsInfoSide';
import WatchNewsLinked from '../../components/WatchNewsLinked/WatchNewsLinked';
import WatchNewsComments from '../../components/WatchNewsComments/WatchNewsComments';
import PaginationBar from '../../components/PaginationBar/PaginationBar';
import { connect } from 'react-redux';
import { getSpecificNews } from '../../actions/getSpecificNewsAction';

class WatchNews extends Component {
    componentDidMount(){
        this.props.getSpecificNews(this.props.match.params.id); 
    }
    render() {
        const { newsItem } = this.props
        return (
            
            <div className="container">
                <div className="watch-news-grid">
                    <div className="watch-news-grid__left">
                        {newsItem && <NewsPreview news={newsItem} watchmode={true}/>}
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

const mapStateToProps = (state) => {
    return {
       newsItem: state.newsItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSpecificNews: (id) => { dispatch(getSpecificNews(id)) },
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(WatchNews);
