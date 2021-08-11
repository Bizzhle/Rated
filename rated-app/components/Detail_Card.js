import { CardDiv } from "../styles";

export default function Detail_Card({ value, index }) {
  return (
    <CardDiv key={index} value={value}>
      <h2>{value.title}</h2>
      <p>
        <span>Category:</span> {value.category[0].name}
      </p>

      <p>
        <span>Store:</span> {value.store[0].name}
      </p>

      <p>
        <span>rating:</span> {value.rating}
      </p>

      <p>
        <span>Comment</span>
        {value.comment}
      </p>
    </CardDiv>
  );
}
