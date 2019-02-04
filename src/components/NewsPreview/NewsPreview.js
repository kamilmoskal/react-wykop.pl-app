import React, { Component } from 'react';
import './NewsPreview.scss';
import { Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NewsPreview extends Component {
  render() {
    const watchmode = this.props.watchmode ? 'watchmode': null;
    return (
        <div className={['news-preview', watchmode].join(' ')}>
            <div className="vote-counter">
                <span className="vote-counter__number">89</span>
                <span className="vote-counter__name">wykop</span>
            </div>
            <div className='image-container'>
                <Link to='/news'><Image src={`http://via.placeholder.com/${watchmode ? '298x223' : '190x127'}`}/></Link>
            </div>
            <div className="news-info">
                <Link to='/news'><div className={['news-info__title', watchmode].join(' ')}>News Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, necessitatibus.</div></Link>
                <div className={['news-info__data', watchmode].join(' ')}>
                    <span>@moski</span>
                    <span>youtube.com</span>
                    <Button icon='list' />
                    <span>#rozrywka</span>
                    <span>#nauka</span>
                    <span>#ciekawostki</span>
                </div>
                <div className={['news-info__describe', watchmode].join(' ')}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates culpa numquam ipsum similique obcaecati voluptate aliquid a deserunt praesentium, rem animi. Labore assumenda deserunt adipisci laudantium perferendis. </div>

                {watchmode ? null :
                <div className="news-info__metadata">
                    <span><Button icon='comments outline' />7 komentarzy</span>
                    <span>dodany 1 min. temu</span>
                </div>}
            </div>
        </div>
    )
  }
}

export default NewsPreview;