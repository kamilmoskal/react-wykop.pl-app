import React, { Component } from 'react';
import './NewsPreview.scss';
import { Container, Image, Button } from 'semantic-ui-react';

class NewsPreview extends Component {
  render() {
    return (
      <Container>
        <div className="news-preview">
            <div className="vote-counter">
                <span className="vote-counter__number">89</span>
                <span className="vote-counter__name">wykop</span>
            </div>
            <div className='image-container'>
                <Image src='http://via.placeholder.com/190x127'/>
            </div>
            <div className="news-info">
                <div className='news-info__title'>News title</div>
                <div className='news-info__data'>
                    <span>@moski</span>
                    <span>youtube.com</span>
                    <Button icon='list' />
                    <span>#rozrywka</span>
                    <span>#nauka</span>
                    <span>#ciekawostki</span>
                </div>
                <div className="news-info__describe">Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sequi qui porro commodi pariatur fugit atque harum dolores nostrum consequatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, assumenda.</div>
                <div className="news-info__metadata">
                    <span><Button icon='comments outline' />7 komentarzy</span>
                    <span>dodany 1 min. temu</span>
                </div>
            </div>
        </div>
      </Container>
    )
  }
}

export default NewsPreview;