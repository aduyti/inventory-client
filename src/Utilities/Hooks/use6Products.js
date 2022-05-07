import { useEffect, useState } from "react";
import axios from "axios";

const use6Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://obscure-eyrie-55678.herokuapp.com/inventory/6')
            .then(results => setProducts(results.data))
            .catch(err => console.error(err));
    }, [])
    return [products, setProducts];
}
export default use6Products;