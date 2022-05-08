import { useEffect, useState } from "react";
import axios from "axios";


const useProductsByEmail = email => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`https://obscure-eyrie-55678.herokuapp.com/inventory/email/${email}`)
            .then(results => setProducts(results.data))
            .catch(err => console.error(err));
    }, [email])
    return [products, setProducts];
}
export default useProductsByEmail;