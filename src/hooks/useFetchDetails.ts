import useSWR from "swr"
import { DeviceDetailResponse } from "../models/Devices"

export const useFetchDetails = (id:string) =>{
    const {data, error} = useSWR<DeviceDetailResponse>(`/product/${id}`, {suspense:true})

    return {data, error, isLoading:!data&&!error}
}