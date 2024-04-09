import { useEffect } from "react";
import "../App.css";
import Card from "./Card";
export default function Cards({products, setBasket}) {
  const[cards,setCards]=React.useState(products); 
  const [value,setValue]=React.useState("");
  useEffect(()=>{
    setCards(products.filter(p=>p.text.toLowerCase().inCludes(value.toLowerCase())));
  },[value]);
  return (
    <div className="cards">
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      {products.map((p) => (
        <Card
          product={p}
          setBasket={setBasket}
        />
      ))}
    </div>
  );
}