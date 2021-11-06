import { AxiosResponse } from "axios";
import api from "../api/devices";
import { DevicesApiResponse } from "../models/Devices";

export const fetcher = async (url: string) => {
  const response: AxiosResponse<DevicesApiResponse> = await api.get(url);
  return response.data;
};
