import React from 'react';
import './NewsPreviewSide.scss';
import { Image, Icon } from 'semantic-ui-react';

const NewsPreviewSide = () => {
    return (
        <div className="news-preview-side">
            <div className='image-container'>
                <Image src='http://via.placeholder.com/113x64'/>
            </div>
            <div className="news-data">
                <div className="news-data__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, recusandae.</div>
                <div className="news-data__votes">
                    <Icon name='fire'/>
                    <span>4989</span>
                </div>
            </div>
        </div>
    )
}

export default NewsPreviewSide
