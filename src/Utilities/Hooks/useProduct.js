import { useEffect, useState } from "react";
import axios from "axios";

const useProduct = id => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`https://obscure-eyrie-55678.herokuapp.com/inventory/id/${id}`)
            .then(result => setProduct(result.data))
            .catch(err => console.error(err));

    }, [id])

    return [product, setProduct];

}
export default useProduct;