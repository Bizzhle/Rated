import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import Link from "next/link";
import Detail_Card from "../../../components/Detail_Card";
import AuthContext from "../../../stores/authContext";
import styled from "@emotion/styled";
import { Button, MainPadding } from "../../../styles";
import Meta from "../../../components/Meta";

const category_detail = ({ categoryDetail }) => {
  const { user } = useContext(AuthContext);
  const [displayList, setDisplayList] = useState(false);

  useEffect(() => {
    if (categoryDetail.category_items.length > 0) {
      setDisplayList(!displayList);
    } else {
      setDisplayList(displayList);
    }
  }, []);

  const cards = categoryDetail.category_items.map((value, index) => {
    return <Detail_Card key={index} value={value} />;
  });
  return (
    <MainPadding>
      <Meta title={categoryDetail.category.name} />
      <div>
        <h1>Items in {categoryDetail.category.name}</h1>

        {displayList ? "" : <p>There are no items to display</p>}
        <CardDetail>{cards}</CardDetail>
        {user ? (
          <span>
            <Link href={`/categorys/${categoryDetail.category._id}/update`}>
              <Button>Update</Button>
            </Link>
            <Link href={`/categorys/${categoryDetail.category._id}/delete`}>
              <Button>Delete</Button>
            </Link>
          </span>
        ) : (
          ""
        )}
      </div>
    </MainPadding>
  );
};

export const getServerSideProps = async (context) => {
  console.table("fetching for category");

  const res = await fetch(
    `${BASE_API_URL}/catalog/category/${context.params.id}`
  );
  const categoryDetail = await res.json();

  return {
    props: {
      categoryDetail,
    },
  };
};

export default category_detail;

const CardDetail = styled.div`
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;
