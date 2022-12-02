

import {  createContext } from "react";

//the context will describe the data structure
//should not have values or implimintation
//its just a promise

const DataContext = createContext({
    cart: [],
    user: {},
    addProductToCart: ()  => {},
    removeProductFromCart: () => {},
});

export default DataContext;
