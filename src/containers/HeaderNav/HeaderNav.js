import React, { Component } from 'react'
import './HeaderNav.scss';
import { Menu, Image, Container, Label, Input, Form } from 'semantic-ui-react';
import logo from '../../assets/images/logo_wykop.png';

class HeaderNav extends Component {
    state = { 
        activeItem: 'Wykopalisko', searchBar: false 
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleSearchBar = () => { 
        this.setState(prevState => ({ searchBar: !prevState.searchBar })) 
    }
    clickSearch = (e, { name }) => {
        this.handleItemClick(e, { name });
        this.handleSearchBar();
    }
    render() {
        const { activeItem } = this.state
        return (
            <Menu pointing secondary borderless className='nav-menu' fixed='top'>
                <Container>
                    <Menu.Item className='logo' name='Logo' active={activeItem === 'Logo'} onClick={this.handleItemClick}>
                        <Image src={logo} width='93'/>
                    </Menu.Item>
           
                    { this.state.searchBar ? 
                    <Form>
                        <Form.Field>
                            <Input className="search-bar" focus={this.state.searchBar} placeholder='Szukaj' />
                        </Form.Field>
                    </Form> :
                    <React.Fragment>
                        <Menu.Item name='Wykopalisko' active={activeItem === 'Wykopalisko'} onClick={this.handleItemClick}>
                            Wykopalisko
                            <Label>501</Label>
                        </Menu.Item>
                        <Menu.Item name='Hity' active={activeItem === 'Hity'} onClick={this.handleItemClick}/>
                        <Menu.Item name='Mikroblog' active={activeItem === 'Mikroblog'} onClick={this.handleItemClick}/>
                    </React.Fragment>}

                    <Menu.Menu position='right'>
                        <Menu.Item name='Szukaj' active={activeItem === 'Szukaj'} onClick={this.clickSearch}/>

                        <Menu.Item name='Dodaj' active={activeItem === 'Dodaj'} onClick={this.handleItemClick}/>

                        <Menu.Item name='Zaloguj się' active={activeItem === 'Zaloguj się'} onClick={this.handleItemClick}/>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}

export default HeaderNav;
