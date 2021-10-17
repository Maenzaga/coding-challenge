import { CartItemApi, CartRequestBody, DevicesApiResponse } from "../models/Devices";
import api from "../api/devices"
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const useFetchCart =({id, colorCode, storageCode}: CartRequestBody) => {
    const [cartCount, setCartCount] = useState(0)
    /* const [error, setError] = useState(''); */

    const cartRequestObj = {id, colorCode, storageCode};

    const fetchCart = async () =>{
        const response: AxiosResponse<CartItemApi> = await api.post(
            "/cart",
            cartRequestObj
            )
            /* .catch(error=>{
                setError({error.message})
            }); */
            setCartCount(response.data.count);
            console.log(response.data.count);
        };

        useEffect(()=>{
            fetchCart()
        },[])

        return cartCount
}