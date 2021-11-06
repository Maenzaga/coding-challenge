import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./styles.scss";

export const ProductHeader = () => {
  const [count] = useContext(CartContext);

  return (
    <header className="header-container">
      <div className="scene">
        {/* <div className="banner">
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
        </div> */}
        <div className="screen"></div>
        <div>{count}</div>
      </div>
    </header>
  );
};
