import React from "react";
import "./App.css";
import Header from "./components/Header";
import NftCryptoBtn from "./components/NftCryptoBtn";
import Footer from "./components/Footer";
import Charts from "./components/Charts";
import Payment from "./components/Payment/Payment";
import { PaymentPageContext } from "./Helper/Context";

function App() {
  const [paymentPage, setPaymentPage] = React.useState(false);
  return (
    <PaymentPageContext.Provider value={{ paymentPage, setPaymentPage }}>
      {console.log("PAYMENT PAGE: ", paymentPage)}
      <div className="wrapper">
        <div className="page">
          {/* <Payment /> */}
          {paymentPage ? (
            <Payment />
          ) : (
            <>
              <Header />
              <NftCryptoBtn />
              <Charts />
              <Footer />
            </>
          )}
        </div>
      </div>
    </PaymentPageContext.Provider>
  );
}

export default App;
