import { Button, Card, CardContent, Grid } from "@mui/material";
import { Product } from "utils/productsArray";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { AppContext } from "Container/App/App";
import Quantity from "components/Quantity/Quantity";

type Props = { product: Product; productCount: number };
const CartProductListItemExtended = ({ product, productCount }: Props) => {
  const data = useContext(AppContext);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <div className="product-img">
            <img src={product.image} alt="" />
          </div>
          <div className="product-title">{product.title}</div>
          <div className="product-features">
            Price for one item: {product.price}
          </div>
          <div className="product-features">Count: {productCount}</div>
          <Quantity
            count={productCount}
            onDecrementClick={() =>
              data?.changeProductQuantity(product.id, productCount - 1)
            }
            onIncrementClick={() =>
              data?.changeProductQuantity(product.id, productCount + 1)
            }
          />
          <Button
            variant="outlined"
            onClick={() => data?.removeProductFromCart(product.id)}
          >
            <DeleteIcon />
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CartProductListItemExtended;
