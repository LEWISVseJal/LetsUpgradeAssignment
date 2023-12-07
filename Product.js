import { useState } from "react";

function Product(props)
{
    let [isAvailable, setIsAvailable] = useState("yes");
    function makeNotAvailable()
    {
        setIsAvailable("no")
    }
    return (
        <div className="product">
            <img className="img" src={props.url}/> 
            <h3>{props.name}</h3>
            <p>{props.price}Rs</p>
            <p>{isAvailable}</p>
            <button onClick={makeNotAvailable}>Click</button>
        </div>
    )
}
export default Product;