import React from 'react';
import './NewsInfoSide.scss';
import { Image } from 'semantic-ui-react';
import moment from 'moment';
import 'moment/locale/pl';

const NewsInfoSide = (props) => {
    const { news } = props
    return (
        <div className="news-info-side">
            <div className="news-info-side__date">Dodany <b>{moment(news.date).startOf('hour').fromNow()}</b> przez:</div>
            <div className="news-info-side__user">
                <Image src='http://via.placeholder.com/40x40'/>
                <div className="login-name">{news.author.login}</div>
                <div className="sign-date">dołączył 5 lat 5 mies. temu</div>
            </div>
            <div className="news-info-side__numbers">
                <div className="vote-up"><b>{news.vote_count}</b> wykopali</div>
                <div className="vote-down"><b>{news.bury_count}</b> zakopali</div>
                <div className="views"><b>19 tys.</b> wyświetleń</div>
            </div>

        </div>
    )
}

export default NewsInfoSide
