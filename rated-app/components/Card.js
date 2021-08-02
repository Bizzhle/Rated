import { CardInfo, CardDiv } from "../styles";

import Link from "next/link";
import styled from "@emotion/styled";

const Card = ({ value }) => {
  return (
    <Link href={`/itemx/${value._id}`}>
      <CardDiv>
        <h3>{value.title}</h3>
        {/* <p>{value.category[0].name}</p> */}
      </CardDiv>
    </Link>
  );
};

export default Card;
