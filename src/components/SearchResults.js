import {ProductItem}  from "./ProductItem";

export default function SearchResults(props) {
  return (
    <div>
      {props.results.map((product) => {
        return (
          <ProductItem key={product.name}  product={product} />
        );
      })}
    </div>
  )
}