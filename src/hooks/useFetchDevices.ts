import useSWR from "swr";
import { DevicesApiResponse } from "../models/Devices";

export const useFetchDevices = () => {
  const { data, error } = useSWR<DevicesApiResponse>(`/product`);

  return { data, isError: error, isLoading: !error && !data };
};
