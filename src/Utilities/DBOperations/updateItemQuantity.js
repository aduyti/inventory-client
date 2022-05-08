import axios from "axios";

const updateItemQuantity = (quantity, id) => {
    axios.put(`https://obscure-eyrie-55678.herokuapp.com/inventory/id/${id}`, {
        quantity
    })
        .then()
}
export default updateItemQuantity;