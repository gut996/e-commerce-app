import React from "react";
import { Route } from 'react-router-dom';

// import CollectionPreview from "../../components/collection-preview/collection-preview";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/CollectionPage';

const ShopPage = ({match}) => (
  <div className="shop-page">
    {/* {collections &&
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))} */}
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
