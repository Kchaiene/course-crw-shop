import React, {useEffect} from 'react';
import {Route} from "react-router-dom";
import {connect} from 'react-redux';
import {fetchCollectionsStart} from "../../redux/shop/shopActions";
import CollectionsListContainer from "../../components/CollectionsList/CollectionsListContainer";
import CollectionsPageContainer from "../../components/CollectionPage/CollectionsPageContainer";




const ShopPage = (props) => {
    const {match, collections, fetchCollectionsStart} = props;

    console.log("ShopPage render", match);

    useEffect(() => {
        if (collections) return;
        fetchCollectionsStart();
        //eslint-disable-next-line
    }, []);


    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsListContainer} />
            <Route  path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />

        </div>
    );
};


const mapDispatchToProps = {
    fetchCollectionsStart
};
const mapStateToProps = (state) => ({
    collections: state.shop.collections
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
