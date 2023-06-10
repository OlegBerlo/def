import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./ProductListItem.scss";
type Props = {};
const ProductListItem = (props: Props) => {
  return (
    <Card className="product" variant="outlined">
      <CardContent>
        <h4 className="product-title">IPhone X</h4>
        <div className="product-description">This is iPhone X</div>
        <div className="product-features">Type: phone</div>
        <div className="product-features">Capacity: 64Gb</div>
        <div className="product-price">Price: $ 500</div>
        <CardActions className="btn-wrap">
          <Button variant="outlined">Add to cart</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
export default ProductListItem;
