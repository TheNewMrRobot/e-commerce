import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectIsCollectionFetching,
} from "../../Redux/ShopData/shopDataSelector";
import withSpinner from "../with-spinner/with-spinner";
import CollectionOverview from "./Collection-overview";
import {compose} from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
