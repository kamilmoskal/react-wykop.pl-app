import React, { Component } from 'react';
import './NewsPreview.scss';
import { Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pl';


class NewsPreview extends Component {
  render() {
    const watchmode = this.props.watchmode ? 'watchmode': null;
    const { news } = this.props

    let newsImage = () => {
        if (news.preview){
            if (this.props.watchmode){
                return `${news.preview.split(',')[0]},w300h223.jpg`
            } else {
                return `${news.preview.split(',')[0]},w207h139.jpg`
            }
        } else {
            return 'http://via.placeholder.com/300x223'
        }
    }
    let newsTags = news.tags ? news.tags.split(' ') : null;
    return (
        <div className={['news-preview', watchmode].join(' ')}>
            <div className="vote-counter">
                <span className="vote-counter__number">{news.vote_count}</span>
                <span className="vote-counter__name">wykop</span>
            </div>
            <div className='image-container'>
                <Link to={'/news/' + news.id}><Image src={newsImage()}/></Link>
            </div>
            <div className="news-info">
                <Link to={'/news/' + news.id}><div className={['news-info__title', watchmode].join(' ')}>{news.title}</div></Link>
                <div className={['news-info__data', watchmode].join(' ')}>
                    <span>@{news.author.login}</span>
                    <span><a href={news.source_url}>link</a> </span>
                    <Button icon='list' />
                    {newsTags && newsTags.map((tag,index) => {
                        return (
                            <span key={index}>{tag}</span>
                        )
                    })}
                </div>
                <div className={['news-info__describe', watchmode].join(' ')}>{news.description}</div>

                {watchmode ? null :
                <div className="news-info__metadata">
                    <span><Button icon='comments outline' />{news.comments_count} komentarzy</span>
                    <span>dodany {moment(news.date).startOf('hour').fromNow()}</span>
                </div>}
            </div>
        </div>
    )
  }
}

export default NewsPreview;