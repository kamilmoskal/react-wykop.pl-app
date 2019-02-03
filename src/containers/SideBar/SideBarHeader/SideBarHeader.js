import React from 'react'
import './SideBarHeader.scss';
import { Divider} from 'semantic-ui-react';

const SideBarHeader = (props) => {
    const heading = props.title ? props.title.toUpperCase() : '';
    const secColor = props.secColor ? 'side-bar-header--sec': null;
    return (
        <React.Fragment>
            <div className={['side-bar-header', secColor].join(' ')}>{heading}</div>
            <Divider />
        </React.Fragment>
    )
}

export default SideBarHeader
