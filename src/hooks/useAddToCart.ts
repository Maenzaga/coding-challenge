import { useCallback, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartRequestBody } from "../models/Devices";
import api from "../api/devices";

export const useAddToCart = (props: CartRequestBody) => {
  const [count, setCartCount] = useContext(CartContext);

  const addToCart = useCallback(async () => {
    try {
      await api.post("/cart", props);
      setCartCount(count + 1);
    } catch (error) {}
  }, []);

  return addToCart;
};
