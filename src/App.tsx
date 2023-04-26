import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import MainHeader from "./Components/MainHeader";
import Footer from "./Components/Footer";
import FooterImage from "./Components/FooterImage";

function App() {
  return (
    <div className="flex flex-col w-full h-full ">
      <MainHeader />
      <Outlet />
      <FooterImage />
      <Footer />
    </div>
  );
}

export default App;
