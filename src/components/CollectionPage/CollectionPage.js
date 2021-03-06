import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectCollectionId} from "../../redux/shop/shopSelectors";
import {NavLink} from "react-router-dom/";
import CollectionItem from "../CollectionItem/CollectionItem";
import './collectionPage.scss';


const CollectionPage = (props ) => {
    const {collection} = props;
    if (collection === void 0 || collection === null )  return ( <div className='error not-found'>Not Found</div> );
    const {title, items} = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items ? items.map( item => (
                    <CollectionItem key={item.id} item={item} />
                )) : null}
            </div>


            <div style={{display: "flex", flexDirection:"column"}}>
                <NavLink to={`/shop/mens`} > TO MEANS</NavLink>
                <NavLink to={`/shop/hats`} > TO HATS</NavLink>
            </div>
        </div>
    );
};

CollectionPage.propTypes = {
    collection: PropTypes.object,
};

const mapStateToProps = (state, {match:{params}}) => ({
    collection: selectCollectionId(params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

