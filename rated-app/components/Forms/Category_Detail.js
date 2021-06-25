import React from "react";
import Card from "../Card";
import styled from "@emotion/styled";
import { Main, CardInfo, CardDiv } from "../../styles";
// import styled from "@emotion/styled/types/base";

// import category from "../../server/models/category";

const Category_Detail = ({ categoryDetail }) => {
  console.log({ categoryDetail });

  const cards = categoryDetail.category_items.map((value, index) => {
    return (
      <CardInfo key={index}>
        <h3>{value.title}</h3>
        <p>rating: {value.rating}</p>
        <span>
          <p>category: {value.category[0].name}</p>
          <p>store: {value.store[0].name}</p>
        </span>

        <p>{value.comment}</p>
      </CardInfo>
    );
  });

  return (
    <>
      <div>
        <h3>Items in {categoryDetail.category.name}</h3>
        <div>{cards}</div>
      </div>
    </>
  );
};

const CardDetail = styled(CardDiv)`
  padding: 10px;

  p {
    padding: 0;
  }
`;

export default Category_Detail;
