import { useState } from "react";
import { Device } from "../../models/Devices";
import { ProductCard } from "../ProductCard/ProductCard";
import "./styles.scss";

type DevicesListProps = { devices: Device[] };

export const ProductListPage = ({ devices }: DevicesListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="main-content">
      <div className="main-content__search">
        <input
          type="text"
          placeholder="Search..."
          className="main-content__search-box"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="main-content__list">
        {devices
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.brand.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((device) => {
            return (
              <ProductCard
                key={device.id}
                id={device.id}
                imgUrl={device.imgUrl}
                brand={device.brand}
                model={device.model}
                price={device.price}
              />
            );
          })}
      </div>
    </main>
  );
};
