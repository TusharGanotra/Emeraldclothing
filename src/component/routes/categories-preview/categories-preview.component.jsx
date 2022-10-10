import CategoryPreview from '../../category-preview/categoryPreview.component'
import {CategoriesContext} from '../../../context/categories.context'

import { useContext , Fragment} from 'react';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
