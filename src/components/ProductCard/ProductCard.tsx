import { useState } from "react";
import { Device } from "../../models/Devices";
import { ProductDetailsModal } from "../ProductDetailsModal/ProductDetailsModal";
import "./styles.scss";

interface ProductCardProps {
  id?: string;
  brand: string;
  model: string;
  price: string;
  imgUrl: string;
}

export const ProductCard = ({
  brand,
  model,
  price,
  imgUrl,
}: ProductCardProps) => {
  /* const [showModal, setShowModal] = useState(false); */

  return (
    <div className="card-container">
      <img src={imgUrl} className="card-image" />
      <section className="card-info">
        <p className="card-info__model">{model}</p>
        <p className="card-info__brand">{brand}</p>
        <p className="card-info__price">{price} $</p>
      </section>
    </div>
  );
};
