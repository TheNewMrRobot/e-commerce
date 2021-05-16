import React, { useEffect, useState } from "react";
import CollectionOverview from "../../Components/Collection-overview/Collection-overview";
import { Route } from "react-router-dom";
import CollectionPage from "../Category/Category";
import { connect } from "react-redux";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../Redux/ShopData/shop.actions";
import withSpinner from "../../Components/with-spinner/with-spinner";

const CollectionsOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const Shop = ({ match, updateCollections }) => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        //Render is function that accept props and send to the components means route property like match,history.. are sent by props
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={Loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={Loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(Shop);
