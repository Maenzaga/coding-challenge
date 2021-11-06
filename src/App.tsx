import { ProductListPage } from "./components/ProducListPage/ProducListPage";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <ProductListPage />
    </CartContextProvider>
  );
}

export default App;
