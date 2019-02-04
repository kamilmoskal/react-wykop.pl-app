import React, { Component } from 'react';
import './WatchNewsLinked.scss';
import { Divider, Icon } from 'semantic-ui-react';
import LinkedItem from './LinkedItem/LinkedItem';

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
                <div className="watch-news-linked__title">POWIĄZANE (6)</div>
                <Divider />
                <div className={`watch-news-linked__items ${divState}`}>
                    <LinkedItem />
                    <LinkedItem />
                    <LinkedItem />
                    <LinkedItem />
                    <LinkedItem />
                    <LinkedItem />
                </div>
                <div className="watch-news-linked__show-more" onClick={this.onToggleCollapse}>{buttonTitle} <Icon name={icon}/></div>
            </div>
        )
    }
}
