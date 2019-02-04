import React from 'react';
import './LinkedItem.scss';
import { Image, Icon } from 'semantic-ui-react';

const LinkedItem = () => {
  return (
    <div className="linked-item">
        <div className="linked-item__head">
            <Icon name='bars'/> <span>+24</span>
        </div>
        <div className="linked-item__img">
            <Image src='http://via.placeholder.com/207x137'/>
        </div>
        <div className="linked-item__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, et.</div>
        <div className="linked-item__meta">
            dodał: <span>moski</span> z <span>youtube.com</span>
        </div>
    
    </div>
  )
}

export default LinkedItem;
