import React from "react";
import Card from "./Card";

const Basket = ({products})=>{
    return(
        <div className="basket">
            <h1>Basket</h1>
            {products.map((p) => (
        <Card
          product={p}
        />
      ))}

        </div>
    )
}

export default Basket;