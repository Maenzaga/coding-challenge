import { useEffect, useState } from "react"
import useSWR from "swr"
import { DeviceDetailResponse } from "../models/Devices"

export const useFetchDetails = (id:string) =>{
    const [deviceData, setDeviceData] = useState<DeviceDetailResponse>() 
    const {data, error} = useSWR<DeviceDetailResponse>(`/product/${id}`)

    useEffect(()=>{
        if (data){
            setDeviceData(data)
        }
    }, [data])

    return {data: deviceData, error, isLoading:!data&&!error}
}