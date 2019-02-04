import React from 'react';
import './WatchNewsLinkedItem.scss';
import { Image, Icon } from 'semantic-ui-react';

const WatchNewsLinkedItem = () => {
  return (
    <div className="watch-news-linked-item">
        <div className="watch-news-linked-item__head">
            <Icon name='bars'/> <span>+24</span>
        </div>
        <div className="watch-news-linked-item__img">
            <Image src='http://via.placeholder.com/207x137'/>
        </div>
        <div className="watch-news-linked-item__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, et.</div>
        <div className="watch-news-linked-item__meta">
            dodał: <span>moski</span> z <span>youtube.com</span>
        </div>
    
    </div>
  )
}

export default WatchNewsLinkedItem
