import api from "../api/devices"
import { useEffect, useState } from "react"
import { Device, DeviceDetailApi, DeviceDetailResponse, DevicesApiResponse } from "../models/Devices"
import { useFetchDevices } from "./useFetchDevices"

export const useDeleteDevices = (id:string) =>{
    const [devicesNew, setDevices] = useState<Device[]>([])
    const {data} = useFetchDevices();

    const removeDevice = async (id: string) =>{
        await api.delete(`/product/${id}`);
        const newDevicesList = devicesNew.filter((device)=>{
            return device.id !== id;
        });
        setDevices(newDevicesList);
    }

    useEffect(()=>{
        if (data){
            setDevices(data)
        }
    }, [data])

    return {removeDevice}
}