import React, { FC, useState } from "react";

interface Props {
  children: string | JSX.Element;
}

interface CartProps {
  image: string;
  name: string;
  id: number;
  details: string;
  stars: number;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartProps[];
  addItemsHandler: (item: CartProps) => void;
  removeItemHandler: (item: CartProps) => void;
}

const CartContext = React.createContext<CartContextProps>({
  cart: [],
  addItemsHandler: (item) => {},
  removeItemHandler: (item) => {},
});

export const CartContextProvider: FC<Props> = (props) => {
  const [cart, setCart] = useState<CartProps[]>([]);

  const addItemsHandler = (item: CartProps): void => {
    setCart((prevState) => [...prevState, item]);
  };

  const removeItemHandler = (item: CartProps): void => {
    const { id } = item;

    const filterArray = cart.filter((element) => element.id !== id);

    setCart(filterArray);
  };

  return (
    <CartContext.Provider
      value={{ cart: cart, addItemsHandler, removeItemHandler }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
