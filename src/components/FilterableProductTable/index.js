import ProducTable from "../ProducTable";
import SearchBar from "../SearchBar";

const FilterableProductTable = ({ products }) => {
  console.log(products);
  return (
    <div className="filterable-product-table">
      <SearchBar />
      <ProducTable />
    </div>
  );
};

export default FilterableProductTable;
