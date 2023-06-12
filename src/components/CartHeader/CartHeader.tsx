import productsArray, { Product, getProductsObject } from "utils/productsArray";
type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: {
    [id: number]: Product;
  };
};

const CartHeader = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <div>
      <div>
        {Object.keys(productsInCart).map((productId) => (
          <div key={productId}>
            {productsObject[parseInt(productId)].title}:{" "}
            {productsInCart[parseInt(productId)]}
          </div>
        ))}
      </div>
      <div>Total:S{}</div>
    </div>
  );
};

export default CartHeader;
