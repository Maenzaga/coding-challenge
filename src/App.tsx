import { useFetchDevices } from "./hooks/useFetchDevices";
import { ProductListPage } from "./components/ProducListPage/ProducListPage";

function App() {
  const { data, isError } = useFetchDevices();
  /* const [count, setCount] = useState(0); */
  return (
    <>
      {/* <CartConext.Provider value={{ count, setCount }}> */}
      <ProductListPage devices={data} />
      {isError && alert(`Ha sucedido un error! ${isError}`)}
      {/* </CartConext.Provider> */}
    </>
  );
}

export default App;
