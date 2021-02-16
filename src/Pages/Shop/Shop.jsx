import React from 'react';
import CollectionOverview from '../../Components/Collection-overview/Collection-overview';  
import { Route } from "react-router-dom";
import CollectionPage from '../Category/Category';

const Shop = ({match})=> {
    console.log(match)
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    
}



export default Shop;
