import React, { useState } from "react";
import NavTitle from "./NavTitle";

const Price = ({ filters, setFilters, fetchedProducts, setProducts }) => {
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 49.99,
    },
    {
      _id: 951,
      priceOne: 50.0,
      priceTwo: 99.99,
    },
    {
      _id: 952,
      priceOne: 100.0,
      priceTwo: 199.99,
    },
    {
      _id: 953,
      priceOne: 200.0,
      priceTwo: 399.99,
    },
    {
      _id: 954,
      priceOne: 400.0,
      priceTwo: 599.99,
    },
    {
      _id: 955,
      priceOne: 600.0,
      priceTwo: 1000.0,
    },
  ];

  const changeProducts = (priceOne, priceTwo) => {
    setFilters({ ...filters, priceOne: priceOne, priceTwo: priceTwo });

    setProducts(
      fetchedProducts.filter((product) => {
        if (filters.color && product.color !== filters.color) return false;
        if (filters.category && product.category !== filters.category)
          return false;
        if (filters.priceOne && product.price <= filters.priceOne) return false;
        if (filters.priceTwo && product.price >= filters.priceTwo) return false;
        return true;
      })
    );
  };

  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              onClick={() => {
                changeProducts(item.priceOne, item.priceTwo);
              }}
            >
              Rs. {item.priceOne.toFixed(2)} - Rs. {item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
