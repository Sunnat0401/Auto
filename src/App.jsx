import Brands from "./Components/Brands/Brands";
import Comments from "./Components/Comments/Comments";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { AutoSystem, Features } from "./Components";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <AutoSystem/>
    <Features/>
    <Brands/>
    <Comments/>
    <Footer/>
    </>
  )
}

export default App;
