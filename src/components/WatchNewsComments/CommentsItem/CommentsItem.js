import React from 'react';
import './CommentsItem.scss';
import { Image } from 'semantic-ui-react';
import CommentsItemAnswer from './CommentsItemAnswer/CommentsItemAnswer';

const CommentsItem = () => {
  return (
    <div className="comments-item">
      <div className="comments-item__img">
          <Image src='http://via.placeholder.com/40x40'/>
      </div>
      <div className="comments-item__head">
        <div className="comments-item__head__login">moski <span>7 godz. temu</span></div>
        <div className="comments-item__head__votes">+312</div>
      </div>
      <div className="comments-item__comment">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="comments-item__answers">
          <CommentsItemAnswer />
          <CommentsItemAnswer />
          <CommentsItemAnswer />
          <CommentsItemAnswer />
      </div>
    </div>
  )
}

export default CommentsItem
