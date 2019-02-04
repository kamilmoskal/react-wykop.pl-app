import React, { Component } from 'react';
import './ArchivesSide.scss';
import { Checkbox, Divider } from 'semantic-ui-react';

class ArchivesSide extends Component {
    state={
        value: '2019'
    }
    handleChange = (e, { value }) => this.setState({ value })
    render() {
        return (
            <div className="archives-side">
                <Checkbox label='2019' value='2019' checked={this.state.value === '2019'} onChange={this.handleChange}/>
                <Divider />
                <Checkbox label='2018' value='2018' checked={this.state.value === '2018'} onChange={this.handleChange}/>
                <Divider />
                <Checkbox label='2017' value='2017' checked={this.state.value === '2017'} onChange={this.handleChange}/>
                <Divider />
                <Checkbox label='2016' value='2016' checked={this.state.value === '2016'} onChange={this.handleChange}/>
                <Divider />
            </div>
        )
    }
}

export default ArchivesSide;
