import React from 'react';
import './NewsInfoSide.scss';
import { Image } from 'semantic-ui-react';

const NewsInfoSide = () => {
    return (
        <div className="news-info-side">
            <div className="news-info-side__date">Dodany <b>6 godz. temu</b> przez:</div>
            <div className="news-info-side__user">
                <Image src='http://via.placeholder.com/40x40'/>
                <div className="login-name">moski</div>
                <div className="sign-date">dołączył 5 lat 5 mies. temu</div>
            </div>
            <div className="news-info-side__numbers">
                <div className="vote-up"><b>347</b> wykopali</div>
                <div className="vote-down"><b>37</b> zakopali</div>
                <div className="views"><b>19 tys.</b> wyświetleń</div>
            </div>

        </div>
    )
}

export default NewsInfoSide
