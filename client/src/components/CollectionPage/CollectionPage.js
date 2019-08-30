import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectCollectionId} from "../../redux/shop/shopSelectors";
import {NavLink} from "react-router-dom/";
import CollectionItem from "../CollectionItem/CollectionItem";
import './collectionPage.scss';
import CollectionsContext from "../../context/collections/collectionsContext";


const CollectionPage = (props ) => {
    const {match} = props;

    const collections = useContext(CollectionsContext);
    const collection = collections[match.params.collectionId];
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

// CollectionPage.propTypes = {
//     collection: PropTypes.object,
// };
//
// const mapStateToProps = (state, {match:{params}}) => ({
//     collection: selectCollectionId(params.collectionId)(state)
// });

export default CollectionPage;


{/*<CollectionsContext.Consumer>*/}
    {/*{*/}
        {/*collections => {*/}
            {/*const collection = collections[match.params.collectionId];*/}
            {/*const {title, items} = collection;*/}
        {/*}*/}
    {/*}*/}
{/*</CollectionsContext.Consumer>*/}
