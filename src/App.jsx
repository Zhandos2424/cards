import "./App.css";
import { MainBasket } from "./Components/BasketCard/MainBasket";
// import Cards from "./Components/Cards";
// import Basket from "./Components/Basket";
// import { useState } from "react";

let products = [
  {
    id: 1,
    check: false,
    img: "https://a.lmcdn.ru/img600x866/M/P/MP002XM0MVIH_12351054_1_v1_2x.jpg",
    quantity: 1,
    price: 160850,
    text_one: "Winterra",
    text: "Куртка утепленная",
  },
  {
    id: 2,
    check: false,
    img: "https://a.lmcdn.ru/img600x866/M/P/MP002XM0MYUB_19878812_1_v1.jpeg",
    quantity: 1,
    price: 14250,
    text_one: "Finn Flare",
    text: "Олимпийка",
  },
  {
    id: 3,
    check: false,
    img: "https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521300_1_v1_2x.jpg",
    quantity: 1,
    price: 141070,
    text_one: "Marc O'Pol",
    text: "Пуховик",
  },
  {
    id: 4,
    check: false,
    img: "https://a.lmcdn.ru/img600x866/R/T/RTLACX556101_21521814_1_v1_2x.jpg",
    quantity: 1,
    price: 62900,
    text_one: "adidas",
    text: "Костюм спортивный",
  },
  {
    id: 5,
    check: false,
    img: "https://a.lmcdn.ru/img600x866/M/P/MP002XM0V7IF_20626479_1_v1_2x.jpg",
    quantity: 1,
    price: 49900,
    text_one: "Vivaldi",
    text: "Пальто",
  },
  {
    id: 6,
    check: false,
    img: "https://a.lmcdn.ru/img600x866/M/P/MP002XW171K8_20402833_1_v1.jpeg",
    quantity: 1,
    price: 8950,
    text_one: "Colin's",
    text: "Брюки",
  },
  {
    id: 7,
    check: false,
    img: "https://a.lmcdn.ru/img600x866/M/P/MP002XM0SB6D_21287631_1_v1.jpeg",
    quantity: 1,
    price: 34875,
    text_one: "Finn Flare",
    text: "Пуховик",
  },
  {
    id: 8,
    check: false,
    img: "https://a.lmcdn.ru/img600x866/R/T/RTLADD722701_21823405_1_v1_2x.jpg",
    quantity: 1,
    price: 55700,
    text_one: "Moaxsport",
    text: "Пуховик Igora light",
  },
];

function App() {
  // const [basket, setBasket] = useState([]);
  // const [night, setNigth] = useState(false);
  return (
    <div className="App">
      {/* <button onClick={() => setNigth(!night)}>Theme</button>
      <Cards products={products} setBasket={setBasket} />
      <Basket products={basket} /> */}
      <MainBasket/>
    </div>
  );
}

export default App;