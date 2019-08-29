import {selectAreCollectionsExists} from "../../redux/shop/shopSelectors";
import {connect} from 'react-redux';
import {compose} from "redux";
import CollectionPage from "./CollectionPage";
import WithSpinner from "../with-Spinner/with-Spinner";
import {createStructuredSelector} from "reselect";




const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectAreCollectionsExists(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;

