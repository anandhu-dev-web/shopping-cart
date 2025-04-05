import HomeCarousel from "../Components/HomeCarousel";
import Products from "../Components/Products";
function Home({products,setCart}) {
  return (
    <>
      <HomeCarousel/>
      <Products products = {products} setCart={setCart}/>
    </>
  );
}

export default Home;
