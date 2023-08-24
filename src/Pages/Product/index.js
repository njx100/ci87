import FilterableProductTable from "../../components/FilterableProductTable";
import { PRODUCTS } from "../../data/products";

const Products = () => {
  return (
    <div>
      <h1>Product page</h1>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
};

export default Products;
