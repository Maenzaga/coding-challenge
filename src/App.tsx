import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useFetchDevices } from "./hooks/useFetchDevices";
import { ProductListPage } from "./components/ProducListPage/ProducListPage";
import { ProductHeader } from "./components/ProductHeader/ProductHeader";

function App() {
  const { data } = useFetchDevices();
  return (
    <>
      <ProductHeader />
      <ProductListPage devices={data} />
    </>
  );
}

export default App;
