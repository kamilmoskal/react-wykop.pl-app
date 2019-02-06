import React from 'react';
import './CommentsItem.scss';
import { Image } from 'semantic-ui-react';
import moment from 'moment';
import 'moment/locale/pl';

const CommentsItem = (props) => {
  const { comment } = props;
  let userAvatar = comment.author.avatar.indexOf("def") >= 0 ? `${comment.author.avatar.split(',')[0]},q40.png` : `${comment.author.avatar.split(',')[0]},q40.jpg`;
  
  console.log(comment)

  let commentAnswer = null;
  if(comment.id !== comment.parent_id){
    commentAnswer = 'comments-item--answer';
  }

  return (
    <div className={['comments-item', commentAnswer].join(' ')}>
      <div className="comments-item__img">
          <Image src={userAvatar}/>
      </div>
      <div className="comments-item__head">
        <div className="comments-item__head__login">{comment.author.login} <span>{moment(comment.date).startOf('hour').fromNow()}</span></div>
        <div className="comments-item__head__votes">{comment.vote_count > 0 ? `+${comment.vote_count}`: comment.vote_count}</div>
      </div>
      <div className="comments-item__comment">
          {`${comment.body}`}
      </div>
    </div>
  )
}

export default CommentsItem
