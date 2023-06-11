import ProductList from "components/Products/ProductList";
import "./Home.scss";
type Props = { addProductToCart: (count: number, price: number) => void };
const Home = ({ addProductToCart }: Props) => {
  return (
    <>
      <ProductList addProductToCart={addProductToCart} />
    </>
  );
};
export default Home;
