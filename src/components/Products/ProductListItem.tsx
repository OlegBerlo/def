import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import "./ProductListItem.scss";
type Props = {
  title: string;
  description: string;
  capacity: string;
  type: string;
  price: number;
  image: string;
};

class ProductListItem extends React.Component<Props> {
  render() {
    return (
      <Card className="product" variant="outlined">
        <CardContent>
          <div className="product-img">
            <img src={this.props.image} alt="logo" />
          </div>
          <h4 className="product-title">{this.props.title}</h4>
          <div className="product-description">{this.props.description}</div>
          <div className="product-features">Type: {this.props.type}</div>
          <div className="product-features">
            Capacity: {this.props.capacity} Gb
          </div>
          <div className="product-price">Price: $ {this.props.price}</div>
          <div className="product-quantity">
            <Button variant="outlined">-</Button>
            <TextField value="1" size="small" />
            <Button variant="outlined">+</Button>
          </div>
          <CardActions className="btn-wrap">
            <Button variant="outlined">Add to cart</Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}
// const ProductListItem = ({
//   title,
//   description,
//   type,
//   capacity,
//   price,
//   image,
// }: Props) => {};
export default ProductListItem;
