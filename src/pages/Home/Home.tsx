import ProductList from "components/Products/ProductList";
import "./Home.scss";
type Props = { addProductToCart: (id: number, count: number) => void };
const Home = ({ addProductToCart }: Props) => {
  return (
    <>
      <ProductList addProductToCart={addProductToCart} />
    </>
  );
};
export default Home;
