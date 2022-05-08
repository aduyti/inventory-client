import axios from "axios";

const updateItemQuantity = (id) => {
    axios.delete(`https://obscure-eyrie-55678.herokuapp.com/inventory/id/${id}`)
    // axios.delete(`http://localhost:5555/inventory/id/${id}`)
}
export default updateItemQuantity;