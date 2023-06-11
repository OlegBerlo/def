import Header from "Container/Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import Main from "Container/Main/Main";
import { useState } from "react";
import { type } from "os";

type ProductsInCart = {
  [id: number]: number;
};

const App = () => {
  const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
    1: 5,
    2: 5,
  });

  const addProductToCart = (id: number, count: number) => {
    setProductsInCart((prevState) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + count,
    }));
  };

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header productsInCart={productsInCart} />
      <button onClick={() => addProductToCart(2, 5)}>
        Add to cart (id:2,count:5)
      </button>
      <Main addProductToCart={addProductToCart} />
    </StyledEngineProvider>
  );
};

export default App;
