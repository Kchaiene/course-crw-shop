import React, {useEffect} from 'react';
import {Route} from "react-router-dom";
import {connect} from 'react-redux';
import {fetchCollections} from "../../redux/shop/shopActions";
import CollectionsListContainer from "../../components/CollectionsList/CollectionsListContainer";
import CollectionsPageContainer from "../../components/CollectionPage/CollectionsPageContainer";
import shopActionTypes from "../../redux/shop/shopTypesAction";




const ShopPage = (props) => {
    const {match,  fetchCollections} = props;

    console.log('ShopPage', props);

    useEffect(() => {
        fetchCollections();
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
    fetchCollections
};
//bindActionCreators();

// const mapDispatchToProps2 = dispatch =>({
//     fetchCollections: () => dispatch(fetchCollections())
// });
// const mapDispatchToProps3 = dispatch =>({
//     fetchCollections: fetchCollections
// });
// const mapDispatchToProps4 = {
//     type: shopActionTypes.FETCH_COLLECTIONS_START
// };
export default connect(null, mapDispatchToProps)(ShopPage);
