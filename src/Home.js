import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123456789"
          title="Becoming: A Guided Journal for Discovering Your Voice"
          price={10.97}
          rating={5}
          image={"https://m.media-amazon.com/images/I/51w4zG9Dn6L.jpg"}
        />
        <Product
          id="123456799"
          title="Asus ROG Strix Hero II Gaming Laptop, 15.6” 144Hz IPS Type, NVIDIA GeForce GTX 1060 6GB GDDR5, Intel Core i7-8750H Processor, 16GB DDR4, 256GB Pcie SSD + 1TB Hdd, RGB, Windows 10 Home - GL504GM-DS74"
          price={1699.0}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81TKu9gu%2BqL._AC_SX679_.jpg"
          }
        />
      </div>
      <div className="home__row">
        <Product
          id="123456989"
          title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
          price={275.51}
          rating={3}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SX679_.jpg"
          }
        />
        <Product
          id="123496789"
          title="Ozeri ZK14-S Pronto Digital Multifunction Kitchen and Food Scale, Black"
          price={11.99}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71lbJjoQHuL._AC_SX679_.jpg"
          }
        />
        <Product
          id="123456999"
          title="Keurig K-Mini Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, 6 to 12 oz. Brew Sizes, Black"
          price={77.68}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71tybZyMkuL._AC_SX679_.jpg"
          }
        />
      </div>
      <div className="home__row">
        <Product
          id="129956789"
          title="JBL Charge 3 Waterproof Portable Bluetooth Speaker (Black), 1"
          price={109.95}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61TSAn9KKxL._AC_SX425_.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Home;
