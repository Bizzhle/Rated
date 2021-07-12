import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const NewItem = ({ itemList }) => {
  console.log(itemList);
  return (
    <Button itemList={itemList}>
      <Link href="/item_form">
        <p>Add a new Item</p>
      </Link>
    </Button>
  );
};

const Button = styled.div`
  width: 100%;
  padding: 0;
  margin-top: 12px;
  text-align: center;
  background-color: #4e66f4;
  color: white;
  border-radius: 5px;

  :hover {
    opacity: 0.5;
    color: #005aff;
  }

  p {
    font-weight: 700;
    padding: 12px;
    margin: 0;
  }
`;

export default NewItem;
