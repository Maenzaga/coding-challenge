import { useEffect, useState } from "react"
import useSWR from "swr"
import { Device, DevicesApiResponse } from "../models/Devices"
import { fetcher } from "./fetcher"

export const useFetchDevices = () =>{
    const [devices, setDevices] = useState<Device[]>([])
    const {data, error} = useSWR<DevicesApiResponse>(`/product`, fetcher);

    useEffect(()=>{
        if (data){
            setDevices(data)
        }
    }, [data])

    return {data: devices, isError:error, isLoading:!error}
}