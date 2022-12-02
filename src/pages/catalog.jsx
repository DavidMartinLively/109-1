import Product from "../components/product";
import "./catalog.css";
import {useEffect, useState} from 'react';
import DataService from "../services/dataService";





function Catalog(){

    let[products, setProducts] = useState([]);

    const loadCatalog = () => {
        let service = new DataService();
        let product = service.getCatalog();
        setProducts (product);

    };

    useEffect(()  => {
        loadCatalog();
    }, []);

    return (
        <div className="catalog">
            
            <h1>Explore all of our unique brands and find which is better suited for you and your needs</h1>
            <h4>We have {products.length} products</h4>

            {products.map((prod) => (
                <Product key={prod._id} data={prod} />
            ))}
             
             
        </div>
    );
}

export default Catalog;

/**
 * create a product component
 * import product in catalog.jsx
 * import Catalog from './catalog';
renimport Product from './../components/product';
der a product below h1
 */