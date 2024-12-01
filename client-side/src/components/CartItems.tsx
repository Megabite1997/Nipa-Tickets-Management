import React, { FC, useContext } from "react";

import CartContext from "../store/cart-context";

import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";

interface TableProps {}

const Table: FC<TableProps> = ({}) => {
  const CartCtx = useContext(CartContext);

  const optionSelectsJSX = (): JSX.Element[] => {
    const optionSelects = [];

    for (let x = 1; x <= 100; x++) {
      optionSelects.push(x);
    }

    return optionSelects.map((element, index) => (
      <option key={index} value={Number(element)}>
        {element}
      </option>
    ));
  };

  const checkoutHandler = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  return (
    <form onSubmit={checkoutHandler}>
      <div className="grid grid-cols-3 gap-10 px-10">
        <div className="grid col-span-2 bg-shiba-yellow p-4 gap-10 rounded-2xl">
          <div className="text-2xl font-bold ">Shopping Cart</div>

          {CartCtx.cart.map((element, index) => (
            <div key={index}>
              <div className="grid grid-cols-4">
                <div className="w-44 p-2 bg-white rounded-xl">
                  <img src={element.image} alt={element.name} />
                </div>

                <div className="col-span-2">
                  <p>name: {element.name}</p>
                  <p>price: {element.price}$</p>
                </div>

                <div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Quantity
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={1}
                    >
                      {optionSelectsJSX()}
                    </select>
                  </div>
                  <div>
                    <button
                      className="bg-rose-500 hover:bg-rose-600 py-2 px-4 rounded-xl grid grid-flow-col items-center gap-1"
                      onClick={() => CartCtx.removeItemHandler(element)}
                    >
                      <RiDeleteBin6Line />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              {CartCtx.cart.length > 1 && (
                <hr className="mt-10 border border-white" />
              )}
            </div>
          ))}
        </div>

        <div className="bg-shiba-yellow p-4 rounded-xl h-fit">
          <div className="grid gap-6">
            <div className="grid grid-flow-col justify-between">
              <h2 className="text-2xl font-bold">Subtotal</h2>
              <h2 className="text-2xl font-bold">
                {CartCtx.cart
                  .reduce((accu, curr) => accu + curr.price, 0)
                  .toFixed(2)}
                $
              </h2>
            </div>

            <p>{CartCtx.cart.length} items</p>

            <div className="grid grid-flow-col gap-2 items-center justify-start ">
              <p className="w-fit">Your order ships FREE</p>
              <MdOutlineLocalShipping />
            </div>

            <button className="bg-amber-500 hover:bg-amber-600 rounded-xl py-2 ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Table;
