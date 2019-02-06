import React from 'react';
import './RelatedItem.scss';
import { Image, Icon } from 'semantic-ui-react';

const RelatedItem = (props) => {
    const { item } = props
    //console.log(item)
    return (
        <div className="related-item">
            <div className="related-item__head">
                <Icon name='bars'/> <span>{item.vote_count}</span>
            </div>
            <div className="related-item__img">
                <Image src='http://via.placeholder.com/207x137'/>
            </div>
            <div className="related-item__title">{item.title}</div>
            <div className="related-item__meta">
                dodał: <span>{item.author.login}</span> z <span><a href={item.url}>link</a></span>
            </div>
        
        </div>
    )
}

export default RelatedItem;
