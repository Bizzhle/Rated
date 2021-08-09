import React, { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import AuthContext from "../../../stores/authContext";
import { Button, MainPadding } from "../../../styles";
import Detail_Card from "../../../components/Detail_Card";

const store_details = ({ storeDetail }) => {
  const { user } = useContext(AuthContext);

  const router = useRouter();
  const [name, setName] = useState("");
  const [displayList, setDisplayList] = useState(false);

  useEffect(() => {
    if (storeDetail.store_items.length > 0) {
      setDisplayList(!displayList);
    } else {
      setDisplayList(displayList);
    }
  }, []);

  const cards = storeDetail.store_items.map((value, index) => {
    return <Detail_Card key={index} value={value} />;
  });
  return (
    <MainPadding>
      <div>
        <h1>Items from {storeDetail.store.name}</h1>
        {displayList ? "" : <p>There are no items to display</p>}
      </div>
      <CardDetail>{cards}</CardDetail>

      {user ? (
        <span>
          <Link href={`/stores/${storeDetail.store._id}/update`}>
            <Button>Update</Button>
          </Link>

          <Link href={`/stores/${storeDetail.store._id}/delete`}>
            <Button>Delete</Button>
          </Link>
        </span>
      ) : (
        ""
      )}
    </MainPadding>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `${BASE_API_URL}/catalog/store/${context.params.id}`
  );
  const storeDetail = await res.data;

  return {
    props: {
      storeDetail,
    },
  };
};

export default store_details;

const CardDetail = styled.div`
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;
