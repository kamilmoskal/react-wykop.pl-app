import React from 'react';
import './CommentPreviewSide.scss';
import { Image } from 'semantic-ui-react';

const CommentPreviewSide = (props) => {
    const userRank = props.userRank ? `meta-data__user--${props.userRank}` : '';
    return (
        <div className="comment-preview-side">
            <div className='image-container'>
                <Image src='http://via.placeholder.com/20x20'/>
            </div>
            <div className="meta-data">
                <span className={['meta-data__user', userRank].join(' ')}>moski</span>
                <span className="meta-data__date">2 tyg. temu</span>
            </div>
            <div className="votes">+2212</div>
            <div className="comment">Lorem, ipsum dolor sitasd asd asd asd sd as asd  amet consectetur adipisicing elit. Voluptatum, voluptas.</div>
            
        </div>
    )
}

export default CommentPreviewSide;
