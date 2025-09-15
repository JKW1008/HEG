// src/App.jsx
import Header from "./components/Header";
import MainBackground from "./components/MainBackground";
import ProductCarousel from "./components/ProductCarousel";
import ProductInformation from "./components/ProductInformation";

function App() {
  return (
    <>
      <Header />
      <MainBackground />
      <ProductInformation />
      <ProductCarousel />
    </>
  );
}

export default App;
