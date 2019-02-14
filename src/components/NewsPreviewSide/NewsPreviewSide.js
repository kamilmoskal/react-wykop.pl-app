import React from 'react';
import './NewsPreviewSide.scss';
import { Image, Icon } from 'semantic-ui-react';

const NewsPreviewSide = (props) => {
    const { news } = props
    return (
        <div className="news-preview-side">
            <div className='image-container'>
                <Image src={news.preview}/>
            </div>
            <div className="news-data">
                <div className="news-data__title">{news.title}</div>
                <div className="news-data__votes">
                    <Icon name='fire'/>
                    <span>{news.vote_count}</span>
                </div>
            </div>
        </div>
    )
}

export default NewsPreviewSide
