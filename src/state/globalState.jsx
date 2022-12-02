import DataContext from "./dataContext";
import { useState } from "react";

const GlobalState = (props) => {
  let [cart, setCart] = useState([]);
  let [user, setUser] = useState({ id:42, name: "David"});

  const addProductToCart = (product) => {
    console.log ("adding to cart");
    // add product to cart array
    // create a copy, mod the copy, set the copy as the new cart
    let copy = [ ...cart];
    copy.push (product);
    setCart(copy);
  };

  const removeProductFromCart = () => {
    console.log("Removing from cart");
  };


  return (
    <DataContext.Provider value=
    {{ cart: cart,
       user: user,
       addProductToCart: addProductToCart,
       removeProductFromCart: removeProductFromCart,
    }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default GlobalState;
