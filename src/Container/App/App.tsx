import Header from "Container/Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "pages/Home/Home";
import CartPage from "pages/Cart/CartPage";
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
      <Container
        sx={{
          padding: "40px 0",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<Home addProductToCart={addProductToCart} />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Container>
    </StyledEngineProvider>
  );
};

export default App;
