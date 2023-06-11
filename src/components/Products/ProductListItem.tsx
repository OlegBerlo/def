import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import "./ProductListItem.scss";
import { type } from "os";
type Props = {
  title: string;
  description: string;
  capacity: string;
  type: string;
  price: number;
  image: string;
};
type State = {
  count: number;
  color: string;
};
class ProductListItem extends React.Component<Props, State> {
  state = {
    count: 1,
    color: "green",
  };
  onIncrementClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  onDecrementClick = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  changeColor = () => {
    this.setState((prevState) => ({
      color: prevState.color === "green" ? "red" : "green",
    }));
  };

  render() {
    const { title, description, type, capacity, price, image } = this.props;
    return (
      <Card className="product" variant="outlined">
        <CardContent>
          <div className="product-img">
            <img src={image} alt="logo" />
          </div>
          <h4 className="product-title">{title}</h4>
          <div className="product-description">{description}</div>
          <div className="product-features">Type: {type}</div>
          <div className="product-features">Capacity: {capacity} Gb</div>
          <div>
            Color:{" "}
            <span className={`${this.state.color}`}>{this.state.color}</span>
          </div>
          <button onClick={() => this.changeColor()}>Change color</button>
          <div className="product-price">Price: $ {price}</div>
          <div className="product-quantity">
            <Button
              variant="outlined"
              onClick={() => this.onDecrementClick()}
              disabled={this.state.count <= 1}
            >
              -
            </Button>
            <TextField value={this.state.count} size="small" />
            <Button
              variant="outlined"
              onClick={() => this.onIncrementClick()}
              disabled={this.state.count >= 10}
            >
              +
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}
export default ProductListItem;
