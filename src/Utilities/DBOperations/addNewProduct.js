import axios from "axios";

const addNewProduct = (product) => {
    axios.post("https://obscure-eyrie-55678.herokuapp.com/inventory/new", {

        "name": product.name,
        "description": product.description,
        "price": product.price,
        "quantity": product.quantity,
        "supplier": product.supplier,
        "image": product.image,
        "ownerEmail": product.ownerEmail
    })
        .then()
}
export default addNewProduct;