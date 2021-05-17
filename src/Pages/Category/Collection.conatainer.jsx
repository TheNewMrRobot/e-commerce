import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectIsCollectionLoaded } from "../../Redux/ShopData/shopDataSelector";
import withSpinner from "../../Components/with-spinner/with-spinner";
import CollectionPage from "./Category";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionsPageContainer;
