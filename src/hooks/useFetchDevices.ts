import { AxiosResponse } from "axios"
import api from "../api/devices"
import { useEffect, useState } from "react"
import useSWR from "swr"
import { Device, DeviceDetailApi, DeviceDetailResponse, DevicesApiResponse } from "../models/Devices"

export const useFetchDevices = () =>{
    const [devices, setDevices] = useState<Device[]>([])
    const [deviceData, setDeviceData] = useState<DeviceDetailResponse>() 
    //TODO detailsModal call implementation?

    const fetcher = async (url: string) =>{
        const response: AxiosResponse<DevicesApiResponse> = await api.get(
            url
        );
        return response.data;
    };

    const {data, error} = useSWR<DevicesApiResponse>(`/product`, fetcher);

    const removeDevice = async (id: string) =>{
        await api.delete(`/product/${id}`);
        const newDevicesList = devices.filter((device)=>{
            return device.id !== id;
        });
        setDevices(newDevicesList);
    }

    useEffect(()=>{
        if (data){
            setDevices(data)
        }
    }, [data])

    return {data: devices, error, removeDevice}
}