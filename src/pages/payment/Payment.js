import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const OrderPlaced = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Order Placed" />
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center pb-20">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              Order successfully placed!
            </p>
            <Link to="/moredetails">
              <button
                className="w-48 h-10 bg-primeColor text-gray-200 text-base font-titleFont font-base 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Order history
              </button>
            </Link>
          </div>
    </div>
  );
};

export default OrderPlaced;
