import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;

  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  
  return (
    <div className="w-full relative group">
      <div onClick={handleProductDetails} className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div>
          <Image className="w-full h-full" imgSrc={props.img} />
        </div>
        <div className="absolute top-6 left-8">
          {props.badge && <Badge text="New" />}
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        <div className="flex items-center justify-between font-titleFont">
          <p className="text-[#767676] text-[14px]">{props.color}</p>
          <button onClick={() =>
            dispatch(
              addToCart({
                _id: props._id,
                name: props.productName,
                quantity: 1,
                image: props.img,
                badge: props.badge,
                price: props.price,
                colors: props.color,
              })
            )
          }
            className="w-32 h-12 flex items-center justify-center gap-2 bg-primeColor text-sm font-normal text-white hover:bg-black duration-300">
            <span>
              <FaShoppingCart />
            </span>Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
