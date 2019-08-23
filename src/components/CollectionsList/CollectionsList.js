import React from 'react';
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsAsArray} from "../../redux/shop/shopSelectors";
import './collectionsList.scss';


const CollectionsList = (props) => {
    const {collections} = props;

    return (
        <div className='collections-list'>
            {collections ? collections.map( ({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            )) : null }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsAsArray
});

export default connect(mapStateToProps)(CollectionsList);
