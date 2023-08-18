import React from "react";
import Category from "./shopBy/Category";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";

const ShopSideNav = ({ filters, setFilters, fetchedProducts, setProducts }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category
        filters={filters}
        setFilters={setFilters}
        fetchedProducts={fetchedProducts}
        setProducts={setProducts}
      />
      <Color />
      <Price
        filters={filters}
        setFilters={setFilters}
        fetchedProducts={fetchedProducts}
        setProducts={setProducts}
      />
    </div>
  );
};

export default ShopSideNav;
