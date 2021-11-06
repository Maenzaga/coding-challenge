import { useFetchDetails } from "../../hooks/useFetchDetails";
import { useAddToCart } from "../../hooks/useAddToCart";
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

  const addToCart = useAddToCart({
    id: data?.id,
    colorCode: data?.options.colors[0].code,
    storageCode: data?.options.storages[0].code,
  });

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content__actions">
          <button
            className="modal-content__actions--close"
            onClick={props.closeModal}
            onKeyDown={props.closeModal}
          >
            X Close
          </button>
        </div>
        <div className="modal-content__info">
          <img className="modal-content__info--image" src={data?.imgUrl} />
          <div className="modal-content__info--details">
            <p className="modal-content__info--title">Marca: </p>
            <p className="modal-content__info--text">{data?.brand}</p>
            <p className="modal-content__info--title">Modelo: </p>
            <p className="modal-content__info--text">{data?.model}</p>
            <p className="modal-content__info--title">Precio: </p>
            <p className="modal-content__info--text">{data?.price}</p>
            <p className="modal-content__info--title">CPU: </p>
            <p className="modal-content__info--text">{data?.cpu}</p>
            <p className="modal-content__info--title">RAM: </p>
            <p className="modal-content__info--text">{data?.ram}</p>
            <p className="modal-content__info--title">Sistema Operativo: </p>
            <p className="modal-content__info--text">{data?.os}</p>
            <p className="modal-content__info--title">Resolución: </p>
            <p className="modal-content__info--text">
              {data?.displayResolution}
            </p>
            <p className="modal-content__info--title">Bateria: </p>
            <p className="modal-content__info--text">{data?.battery}</p>
            <p className="modal-content__info--title">Cámara Principal: </p>
            <p className="modal-content__info--text">{data?.primaryCamera}</p>
            <p className="modal-content__info--title">Cámara Selfie: </p>
            <p className="modal-content__info--text">{data?.secondaryCmera}</p>
            <p className="modal-content__info--title">Dimensioines: </p>
            <p className="modal-content__info--text">{data?.dimentions}</p>
            <p className="modal-content__info--title">Peso: </p>
            <p className="modal-content__info--text">{data?.weight}</p>
          </div>
        </div>
        <div className="modal-content__footer">
          <p className="modal-content__footer--title">Colores: </p>
          <p className="modal-content__footer--text">
            {data?.options.colors[0].name}
          </p>
          <p className="modal-content__footer--title">Almacenamiento: </p>
          <p className="modal-content__footer--text">
            {data?.options.storages[0].name}
          </p>
          {error && alert(`Ha sucedido un error! ${error}`)}
          <button
            className="modal-content__footer-button"
            type="button"
            onClick={addToCart}
            onKeyDown={addToCart}
          />
        </div>
      </div>
    </div>
  );
};
