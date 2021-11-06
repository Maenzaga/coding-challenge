import { useState } from "react";
import { useFetchDevices } from "../../hooks/useFetchDevices";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductFooter } from "../ProductFooter/ProductFooter";
import { ProductHeader } from "../ProductHeader/ProductHeader";
import "./styles.scss";

export const ProductListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError } = useFetchDevices();

  return (
    <div className="app-container">
      <ProductHeader />
      {!isLoading ? (
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
            {data
              ?.filter((val) => {
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
          {isError && <h1>{isError}</h1>}
        </main>
      ) : (
        <main className="main-content__loading">Loading...</main>
      )}
      <ProductFooter />
    </div>
  );
};
