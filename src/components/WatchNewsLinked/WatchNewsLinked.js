import React, { Component } from 'react';
import './WatchNewsLinked.scss';
import { Divider, Icon } from 'semantic-ui-react';
import WatchNewsLinkedItem from './WatchNewsLinkedItem/WatchNewsLinkedItem';

export default class WatchNewsLinked extends Component {
    state = {
        collapsed: true
    }
    onToggleCollapse = () => {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed
        }));
    }
    render() {
        let divState = 'collapsed';
        let buttonTitle = 'Zobacz więcej';
        let icon = 'angle down';
        if (!this.state.collapsed) {
            divState = 'expanded';
            buttonTitle = 'Zobacz mniej';
            icon = 'angle up';
        }
        return (
            <div className="watch-news-linked">
                <Divider />
                <div className="watch-news-linked__title">POWIĄZANE (4)</div>
                <Divider />
                <div className={`watch-news-linked__items ${divState}`}>
                    <WatchNewsLinkedItem />
                    <WatchNewsLinkedItem />
                    <WatchNewsLinkedItem />
                    <WatchNewsLinkedItem />
                    <WatchNewsLinkedItem />
                    <WatchNewsLinkedItem />
                </div>
                <div className="watch-news-linked__show-more" onClick={this.onToggleCollapse}>{buttonTitle} <Icon name={icon}/></div>
            </div>
        )
    }
}
