import React from 'react';
import './CommentsItem.scss';
import { Image } from 'semantic-ui-react';
import moment from 'moment';
import 'moment/locale/pl';
import Parser from 'html-react-parser';

const CommentsItem = (props) => {
  const { comment } = props;
  let userAvatar = comment.author.avatar.indexOf("def") >= 0 ? `${comment.author.avatar.split(',')[0]},q40.png` : `${comment.author.avatar.split(',')[0]},q40.jpg`;

  let commentAnswer = null;
  let commentColor = null;
  let commentVoteColor = null;
  if(comment.author.color === 1){
    commentColor = 'comments-item__head__login--1';
  } else if (comment.author.color === 2){
    commentColor = 'comments-item__head__login--2';
  }
  if(comment.id !== comment.parent_id){
    commentAnswer = 'comments-item--answer';
  }
  if(comment.vote_count > 0){
    commentVoteColor = 'comments-item__head__votes--plus'
  } else if(comment.vote_count < 0){
    commentVoteColor = 'comments-item__head__votes--minus'
  }

  return (
    <div className={['comments-item', commentAnswer].join(' ')}>
      <div className="comments-item__img">
          <Image src={userAvatar}/>
      </div>
      <div className="comments-item__head">
        <div className={['comments-item__head__login', commentColor].join(' ')}>{comment.author.login} <span>{moment(comment.date).startOf('hour').fromNow()}</span></div>
        <div className={['comments-item__head__votes', commentVoteColor].join(' ')}>{comment.vote_count > 0 ? `+${comment.vote_count}`: comment.vote_count}</div>
      </div>
      <div className="comments-item__comment">
          {/* <div dangerouslySetInnerHTML={{__html: comment.body}} /> */}
          {Parser(""+comment.body)}
          <br/>
          {comment.embed && <img src={comment.embed.preview} alt=""/>}
      </div>
    </div>
  )
}

export default CommentsItem
