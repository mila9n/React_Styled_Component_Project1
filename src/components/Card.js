import React from "react";
import { StyleCard } from "./styles/Card.styled";

export default function Card(props) {
  return (
    <StyleCard>
      <div>
        <h2>{props.item.title}</h2>
        <p>{props.item.body}</p>
      </div>
      <div>
        <img src={props.item.image} alt="" />
      </div>
    </StyleCard>
  );
}
