import React from 'react';
import { Container } from 'semantic-ui-react';
import './TagNav.scss';

const TagNav = () => {
  return (
    <Container>
        <div className="tag-bar">
            <ul className="tag-list">
                <li className="tag-item">Ciekawostki</li>
                <li className="tag-item">Nauka</li>
                <li className="tag-item">Historia</li>
                <li className="tag-item">Rozrywka</li>
                <li className="tag-item">Sport</li>
                <li className="tag-item">Motoryzacja</li>
                <li className="tag-item">Syria</li>
                <li className="tag-item">Świat</li>
                <li className="tag-item">SpaceX</li>
                <li className="tag-item">Programowanie</li>
                <li className="tag-item">Technologia</li>
                <li className="tag-item">AMA</li>
            </ul>
        </div>
    </Container>
  )
}

export default TagNav
