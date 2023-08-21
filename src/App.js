import React from "react";
import ReactDOM from "react-dom/client";


// Default import
import HeaderComponent  from "./components/Header" ;
import Body from "./components/Body";
import Footer from "./components/Footer";


// const burgerKing ={
//     name : "Burger King",
//     image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aa77cb6fce4d94f3ad4b4e7fb42782db",
//     cusines: ["Burger", "American"],
//     rating:"4.2"

// }

// const RestroCard = () =>{
//   return(
//   <div className="card" >
//       <img src={burgerKing.image}></img>
//       <h2>{burgerKing.name}</h2>
//       <h3>{burgerKing.cusines.join(",")}</h3>
//       <h4>{ burgerKing.rating} Stars</h4>
//   </div>)
// }




const AppLoyout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />

    </>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLoyout />);
