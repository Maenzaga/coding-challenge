import useSWR from "swr";
import { useFetchDetails } from "../../hooks/useFetchDetails";
import { DeviceDetail, DeviceDetailApi } from "../../models/Devices";
import "./styles.scss";

interface ProductDetailsModalProps {
  deviceId: string;
  show: boolean;
  closeModal: (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => void;
}

export const ProductDetailsModal = (props: ProductDetailsModalProps) => {
  const { data, error } = useFetchDetails(props.deviceId);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content__info">
          <img className="modal-content__info--image" src={data?.imgUrl} />
          <div className="modal-content__info--details">
            <p className="modal-content__info--text">{data?.brand}</p>
            <p className="modal-content__info--text">{data?.model}</p>
            <p className="modal-content__info--text">{data?.price}</p>
            <p className="modal-content__info--text">{data?.cpu}</p>
            <p className="modal-content__info--text">{data?.ram}</p>
            <p className="modal-content__info--text">{data?.os}</p>
            <p className="modal-content__info--text">
              {data?.displayResolution}
            </p>
            <p className="modal-content__info--text">{data?.battery}</p>
            <p className="modal-content__info--text">{`Principal: ${data?.primaryCamera}`}</p>
            <p className="modal-content__info--text">{`Selfie: ${data?.secondaryCamera}`}</p>
            <p className="modal-content__info--text">{data?.dimentiones}</p>
            <p className="modal-content__info--text">{data?.weight}</p>
          </div>
        </div>
        <div className="modal-content__actions">
          <button
            className="modal-content__actions--close"
            onClick={props.closeModal}
            onKeyDown={props.closeModal}
          >
            X Close
          </button>
        </div>
      </div>
    </div>
  );
};
