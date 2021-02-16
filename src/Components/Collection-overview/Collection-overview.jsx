import React from 'react'
import { connect } from "react-redux";
import "./collections-overview.styles.scss"
import { createStructuredSelector  } from "reselect";
import {selectCollectionForPreview} from '../../Redux/ShopData/shopDataSelector';
import PreviewCollections from '../PreviewCollections/PreviewCollections';



const CollectionOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {collections.map(collection => (<PreviewCollections key={collection.id}{...collection}/>))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
