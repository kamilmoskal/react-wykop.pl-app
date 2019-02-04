import React from 'react';
import './HomeNav.scss';
import { Icon, Button } from 'semantic-ui-react';

const HomeNav = (props) => {
    return (
        <div className="home-nav">
            <div className="home-nav__left">
                <span className='title'>{props.title.toUpperCase()}</span>
                {props.items && props.items.map((item, index) => {
                    return (
                        <span className='item' key={index}>{item}</span>
                    )
                })}
            </div>
            <div className="home-nav__right">
                <Button icon>
                <Icon name='list'/>
                </Button>
                <Button icon>
                <Icon name='block layout'/>
                </Button>
            </div>
        </div>
    )
}

export default HomeNav;
