import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import MainHeader from "./Components/MainHeader";
import Footer from "./Components/Footer";
import FooterImage from "./Components/FooterImage";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="flex flex-col w-full h-full ">
      <Helmet>
        <title>CLG CAPITAL</title>
        <meta
          name="description"
          content="CLG CAPITAL specializes in structured transactions to high growth
          companies providing transparent capital for the companies we invest
          in."
        />
        <link rel="canonical" href="https://clgcap.com/" />
      </Helmet>
      <MainHeader />
      <Outlet />
      <FooterImage />
      <Footer />
    </div>
  );
}

export default App;
