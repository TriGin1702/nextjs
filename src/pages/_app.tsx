// import "../styles/globals.css"; // Move global CSS here
import "../../public/styles.css";
import React from "react";
import { AppProps } from "next/app";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default MyApp;
