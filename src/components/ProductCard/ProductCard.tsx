import { Suspense, useState } from "react";
import { useFetchDetails } from "../../hooks/useFetchDetails";
import { Device } from "../../models/Devices";
import { ProductDetailsModal } from "../ProductDetailsModal/ProductDetailsModal";
import "./styles.scss";

interface ProductCardProps {
  id: string;
  brand: string;
  model: string;
  price: string;
  imgUrl: string;
}

export const ProductCard = ({
  id,
  brand,
  model,
  price,
  imgUrl,
}: ProductCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    setShowModal(!showModal);
  };

  return (
    <div
      className="card-container"
      onClick={toggleModal}
      onKeyDown={toggleModal}
    >
      <img src={imgUrl} className="card-image" />
      <section className="card-info">
        <p className="card-info__model">{model}</p>
        <p className="card-info__brand">{brand}</p>
        <p className="card-info__price">{price} $</p>
      </section>
      {showModal ? (
        <Suspense fallback={<h1>Loading posts...</h1>}>
          <ProductDetailsModal
            show={showModal}
            closeModal={toggleModal}
            deviceId={id}
          />
        </Suspense>
      ) : (
        <></>
      )}
    </div>
  );
};
