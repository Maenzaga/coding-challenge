import {createContext} from "react"

export const CartConext = createContext({count:0, setCount: (cartCount:number)=>{}})