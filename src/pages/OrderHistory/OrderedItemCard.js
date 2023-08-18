import React from "react";

const OrderedItemCard = ({ item }) => {
  return (
    <div className="w-full grid grid-cols-6 mb-4 border py-2">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <img className="w-32 h-32" src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold">{item.name}</h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold">
          ${item.price}
        </div>
        <div className="flex w-1/3 items-center text-lg font-semibold">
          {item.quantity}
        </div>
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>${item.quantity * item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderedItemCard;
