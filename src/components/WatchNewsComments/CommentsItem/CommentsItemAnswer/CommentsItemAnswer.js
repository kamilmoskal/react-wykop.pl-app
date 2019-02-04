import React from 'react';
import './CommentsItemAnswer.scss';
import { Image } from 'semantic-ui-react';

const CommentsItemAnswer = () => {
  return (
    <div className="comments-item-answer">
      <div className="comments-item-answer__img">
          <Image src='http://via.placeholder.com/30x30'/>
      </div>
      <div className="comments-item-answer__head">
        <div className="comments-item-answer__head__login">moski <span>7 godz. temu</span></div>
        <div className="comments-item-answer__head__votes">+312</div>
      </div>
      <div className="comments-item-answer__comment">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi quidem id. Cum, ea! Et, impedit beatae! Cupiditate vel, dignissimos suscipit repudiandae delectus quos voluptatum.
      </div>
    </div>
  )
}

export default CommentsItemAnswer;
