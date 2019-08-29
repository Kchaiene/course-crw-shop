import React from 'react';
import "./MenuItem.scss"
import {withRouter} from "react-router-dom";


const MenuItem = ({title, imageUrl, size='normal', linkUrl, history, match  }) => {
    return (
        <div className={`${size} menu-item`}
             onClick={ e => history.push(`${match.url}${linkUrl}`) }
        >
            <div className='background-image' style={{ backgroundImage:`url(${imageUrl})` }} />
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);

//


