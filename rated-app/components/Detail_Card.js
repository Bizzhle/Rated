import { CardDiv } from "../styles";

export default function Detail_Card({ value, index }) {
  return (
    <CardDiv key={index} value={value}>
      <h2>{value.title}</h2>
      <p>category: {value.category[0].name}</p>

      <p>store: {value.store[0].name}</p>

      <p>rating: {value.rating}</p>

      <p>{value.comment}</p>
    </CardDiv>
  );
}
