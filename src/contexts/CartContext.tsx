import React, { createContext, useState } from 'react';

type CartContextProps = [number, (count: number) => void];

export const CartContext = createContext<CartContextProps>([
  0,
  (_: number) => {}, // eslint-disable-line @typescript-eslint/no-empty-function
]);

export const CartContextProvider: React.FC = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={[cartCount, setCartCount]}>
      {children}
    </CartContext.Provider>
  );
};
