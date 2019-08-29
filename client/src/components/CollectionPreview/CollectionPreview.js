import React from 'react';
import CollectionItem from "../CollectionItem/CollectionItem";
import './collection-preview.styles.scss';
import {NavLink, withRouter} from "react-router-dom";



const CollectionPreview = (props) => {
    const {match, collection} = props;
    const {title, items, routeName} = props.collection;

    return (
        <div className='collection-preview' >
            <h1 className='title' >
                <NavLink to={`${match.path}/${routeName}`}>
                    {title.toUpperCase()}
                </NavLink>
            </h1>
            <div className='preview' >
                { items
                    .filter( (item, indx) => indx < 4  )
                    .map( item => (
                    <CollectionItem key={item.id} item={item} />
                ))}

            </div>
        </div>
    );
};

export default withRouter(CollectionPreview);
