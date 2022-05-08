import { useEffect, useState } from "react";
import axios from "axios";


const useProductsByEmail = email => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://obscure-eyrie-55678.herokuapp.com/inventory/all')
            .then(results => setProducts(results.data))
            .catch(err => console.error(err));
    }, [])
    return [products, setProducts];
}
export default useProductsByEmail;