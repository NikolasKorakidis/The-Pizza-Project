import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/PizzaList.scss";

const selectUser = (reduxState) => {
  return reduxState.user;
};
const selectPizza = (reduxState) => reduxState.pizzas;

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizza = useSelector(selectPizza);
  const dispatch = useDispatch();

  return (
    <div className="pizzaDiv">
      <h1>Pizza Explorer</h1>
      <h3>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
      </h3>
      <ul>
        {[...pizza]
          .sort((a, b) => a.bought - b.bought)
          .map((pizza) => {
            const toggle = () => {
              dispatch({
                type: "TOGGLE_FAVORITE_PIZZA",
                payload: pizza.id,
              });
            };
            return (
              <div className="PizzaSmallDiv" key={pizza.id}>
                <li>{pizza.name}</li>
                <li>{pizza.description}</li>
                <button className="likeButton" onClick={toggle}>
                  {user.favorites.includes(pizza.id) ? "♥" : "♡"}
                </button>
              </div>
            );
          })}
      </ul>
      <strong></strong>
    </div>
  );
}
