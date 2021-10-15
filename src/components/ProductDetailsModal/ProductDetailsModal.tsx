import { useFetchDetails } from "../../hooks/useFetchDetails";
import { DeviceDetailApi } from "../../models/Devices";
import "./styles.scss";

export const ProductDetailsModal = (Myid: string) => {
  const { data } = useFetchDetails(Myid);
  return console.log({ data });
};
