import { useEffect, useState } from "react"
import useSWR from "swr"
import { Device, DevicesApiResponse } from "../models/Devices"


export const useFetchDevices = () =>{
    const [devices, setDevices] = useState<Device[]>([])
    const {data, error} = useSWR<DevicesApiResponse>(`/product`);

    useEffect(()=>{
        if (data){
            setDevices(data)
        }
    }, [data])

    return {data: devices, isError:error, isLoading:!error}
}