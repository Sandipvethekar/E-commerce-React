import React from 'react'
import { useFilterContext } from '../Context/Filter_context'
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();
  return (
    <div>
      {grid_view ? (
        <GridView products={filter_products} />
      ) : (
        <ListView products={filter_products} />
      )}
    </div>
  );
 
}

export default ProductList