import { memo } from 'react';

function ProductItemComponent(props) {
  return (
    <div style={{marginBlock: '10px'}}>
      {props.product.name} - ${props.product.price}
    </div>
  )
}
export const ProductItem = memo(
  ProductItemComponent, 
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
  }
);
