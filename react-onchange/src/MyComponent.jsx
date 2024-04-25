/* so let's create a shopping cart like program using onChange 
event handler and useState() react hook */

import React, {useState} from 'react';

function MyComponent(){

    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState();

    function handleItemChange(event) {
        setItem(event.target.value);
    }
    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }
    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }
    function handleShippingChange(event) {
        setShipping(event.target.value);
    }
    return(
        <div> 
            <input type="text" 
                   value={item} 
                   onChange={handleItemChange} />
            <p> Item: {item} </p>
            <input type="number" 
                   value={quantity} 
                   onChange={handleQuantityChange} />
            <p> Quantity: {quantity} </p>
            <textarea placeholder="Enter delivery instructions" 
                      value={comment}
                      onChange={handleCommentChange} />
            <p> Comment: {comment} </p>
            <select onChange={handlePaymentChange} >
                <option value="">select payment method</option>
                <option value="visa">visa</option>
                <option value="master card">master card</option>
                <option value="gift card">gift card</option>
                <option value="credit card">credit card</option>
            </select>
            <p> Payment method: {payment} </p>
            <label>
                <input type="radio" 
                       value="pick up" 
                       checked={shipping === "pick up"}
                       onChange={handleShippingChange} />
                       pick up
            </label>
            <br />
            <label >
                <input type="radio"
                       value="delivery"
                       checked={shipping === "delivery"}
                       onChange={handleShippingChange} />
                       delivery
            </label>
            <br />
            <p> Shipping: {shipping} </p>
        </div>
    );
}
export default MyComponent








