import {compose} from "redux";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import CollectionsList from "./CollectionsList";
import WithSpinner from "../with-Spinner/with-Spinner";
import {selectAreCollectionsExists} from "../../redux/shop/shopSelectors";


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectAreCollectionsExists(state)
});


const CollectionsListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsList);


export default CollectionsListContainer;


