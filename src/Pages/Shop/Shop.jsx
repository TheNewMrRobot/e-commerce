import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import CollectionsPageContainer from "../Category/Collection.conatainer";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../Redux/ShopData/shop.actions";
import CollectionsOverviewContainer from "../../Components/Collection-overview/collection-overview.container";

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        //Render is function that accept props and send to the components means route property like match,history.. are sent by props
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(Shop);
