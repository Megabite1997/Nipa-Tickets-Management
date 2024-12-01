import React, { FC, useContext } from "react";
import CartContext from "../store/cart-context";
import ImageEmptyBox from "../assets/empty-box.jpeg";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";

const Cart: FC = () => {
  const CartCtx = useContext(CartContext);
  const { cart } = CartCtx;
  return (
    <div className="pt-40">
      {cart.length <= 0 && (
        <div className="text-center">
          <h1 className="pt-10 text-3xl font-bold ">Your cart is empty.</h1>
          <p className="pt-10">
            No item?{" "}
            <Link
              className="text-amber-500 hover:text-amber-600 underline"
              to="/login"
            >
              Login
            </Link>{" "}
            to see items you may have added from another computer or device.
          </p>
          <img className="mx-auto mt-10 " src={ImageEmptyBox} alt="Empty box" />
        </div>
      )}

      {cart.length > 0 && (
        <div>
          <CartItems />
        </div>
      )}
    </div>
  );
};

export default Cart;
