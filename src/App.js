import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import ProductHomeScreen from "./screens/ProductHomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

const RoutesManager = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Homescreen />} exact></Route>
          <Route path={`/product/:id`} element={<ProductHomeScreen />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

function App() {
  return <RoutesManager />;
}

export default App;
