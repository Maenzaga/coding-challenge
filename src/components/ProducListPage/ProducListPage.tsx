import { Device } from "../../models/Devices";
import { ProductCard } from "../ProductCard/ProductCard";
import "./styles.scss";

type DevicesListProps = { devices: Device[] };

export const ProductListPage = ({ devices }: DevicesListProps) => (
  <main className="main-content">
    {devices.map((device) => {
      return (
        <ProductCard
          key={device.id}
          imgUrl={device.imgUrl}
          brand={device.brand}
          model={device.model}
          price={device.price}
        />
      );
    })}
  </main>
);
