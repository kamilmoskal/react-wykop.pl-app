import React, { Component } from 'react';
import './HomeNav.scss';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class HomeNav extends Component {
    state = { 
        activeLeftItem: 'aktywne', activeRightItem: 'list'
    }
    handleLeftItemClick = (e, { name }) => this.setState({ activeLeftItem: name })
    handleRightItemClick = (e, { icon }) => this.setState({ activeRightItem: icon })
    render() {
        const { activeLeftItem } = this.state
        const { activeRightItem } = this.state
        return (
            <Menu pointing secondary borderless className="home-nav" >
                <Menu.Item className='title'>{this.props.title.toUpperCase()}</Menu.Item>
                {this.props.items && this.props.items.map((item, index) => {
                    return (
                        <Menu.Item key={index} name={item} active={activeLeftItem === item} onClick={this.handleLeftItemClick} as={Link} to={{/* `/wykopalisko/${item}` */}}/>
                    )
                })}
                <Menu.Menu position='right'>
                    <Button icon='list' active={activeRightItem === 'list'} onClick={this.handleRightItemClick}/>
                    <Button icon='block layout' active={activeRightItem === 'block layout'} onClick={this.handleRightItemClick}/>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default HomeNav;

           