/* eslint-disable jsx-a11y/img-redundant-alt */
// src/SectionHeader.js

import React from 'react';
import '../css/Header.css';

function Header() {
    return (
        <div className="section-header">
            <div className="section-title">57th Inter IIT <br />Sports Meet</div>
            <div className="cards-container">
                <img src="../../assets/Rectangle1.png" alt="Image 1" className="card" />
                <img src="../../assets/Rectangle2.png" alt="Image 2" className="card" />
                <img src="../../assets/Rectangle3.png" alt="Image 3" className="card" />
            </div>
            <div className="section-stage">
                The stage is <br/>set where all the <br/> IITs are fighting to get the <br/>top spot
            </div>
            <div className="section-date">IIT Kanpur<br />12th Dec to 20th Dec</div>
        </div>
    );
}

export default Header;
