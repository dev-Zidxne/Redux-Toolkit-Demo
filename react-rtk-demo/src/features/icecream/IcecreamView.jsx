import React from "react";
import { useSelector } from "react-redux";

export const IcecreamView = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecreams);
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecream}</h2>
      <button>Order ice cream</button>
      <button>Restock ice creams</button>
    </div>
  );
};
