import "./App.css";
import Header from "./components/Header";
import NftCryptoBtn from "./components/NftCryptoBtn";
import Footer from "./components/Footer";
import Charts from "./components/Charts";
import Payment from "./components/Payment/Payment";
function App() {
  return (
    <div className="wrapper">
      <div className="page">
        <Payment />
        {/* <Header />
        <NftCryptoBtn />
        <Charts />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
