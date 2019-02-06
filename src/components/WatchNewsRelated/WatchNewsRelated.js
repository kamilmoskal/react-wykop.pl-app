import React, { Component } from 'react';
import './WatchNewsRelated.scss';
import { Divider, Icon } from 'semantic-ui-react';
import RelatedItem from './RelatedItem/RelatedItem';

class WatchNewsRelated extends Component {
    state = {
        collapsed: true
    }
    onToggleCollapse = () => {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed
        }));
    }
    render() {
        const { related } = this.props;

        let divState = 'collapsed';
        let buttonTitle = 'Zobacz więcej';
        let icon = 'angle down';
        if (!this.state.collapsed) {
            divState = 'expanded';
            buttonTitle = 'Zobacz mniej';
            icon = 'angle up';
        }
        return (
            <div className="watch-news-related">
                <Divider />
                <div className="watch-news-related__title">POWIĄZANE ({related.length})</div>
                <Divider />
                <div className={`watch-news-related__items ${divState}`}>
                    { related && related.map((item,index) => {
                        return (
                            <RelatedItem item={item} key={index}/>
                        )
                    })}
                </div>
                <div className="watch-news-related__show-more" onClick={this.onToggleCollapse}>{buttonTitle} <Icon name={icon}/></div>
            </div>
        )
    }
}

export default WatchNewsRelated;
