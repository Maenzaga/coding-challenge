import api from "../api/devices"
import { useEffect, useState } from "react"
import useSWR from "swr"
import { Device, DeviceDetailApi, DeviceDetailResponse, DevicesApiResponse } from "../models/Devices"
import { AxiosResponse } from "axios"

export const useFetchDetails = (id:string) =>{
    const [deviceData, setDeviceData] = useState<DeviceDetailResponse>() 
    //TODO detailsModal call implementation?

    const fetcher = async (url: string) =>{
        const response: AxiosResponse<DeviceDetailResponse> = await api.get(
            url
        );
        return response.data;
    };

    const {data, error} = useSWR<DeviceDetailResponse>(`/product/${id}`, fetcher)

    useEffect(()=>{
        if (data){
            setDeviceData(data)
        }
    }, [data])

    return {data: deviceData, error}
}