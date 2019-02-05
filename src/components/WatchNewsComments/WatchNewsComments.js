import React, { Component } from 'react'
import './WatchNewsComments.scss';
import { Menu } from 'semantic-ui-react';
import CommentsItem from '../CommentsItem/CommentsItem';

class WatchNewsComments extends Component {
    state = { 
        activeMenuItem: 'najstarsze',
    }
    handleMenuItemClick = (e, { name }) => this.setState({ activeMenuItem: name })
    render() {
        const { activeMenuItem } = this.state
        return (
            <div className="watch-news-comments">
                <Menu pointing secondary borderless className="watch-news-comments__menu" >
                    <Menu.Item className='title'>KOMENTARZE (218):</Menu.Item>
                    <Menu.Item name='najstarsze' active={activeMenuItem === 'najstarsze'} onClick={this.handleMenuItemClick}/>
                    <Menu.Item name='najnowsze' active={activeMenuItem === 'najnowsze'} onClick={this.handleMenuItemClick}/>
                    <Menu.Item name='najlepsze' active={activeMenuItem === 'najlepsze'} onClick={this.handleMenuItemClick}/>
                </Menu>
                <CommentsItem />
                <CommentsItem />
                <CommentsItem />
            </div>
        )
    }
}

export default WatchNewsComments;
