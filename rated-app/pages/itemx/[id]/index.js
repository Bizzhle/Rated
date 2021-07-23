import React from "react";
import Item_Detail from "../../../components/Forms/Item_Detail";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";

const item_detail_info = ({ itemDetail }) => {
  return <Item_Detail itemDetail={itemDetail} />;
};

export const getServerSideProps = async (context) => {
  console.log("fetching for item");

  const res = await axios.get(
    `${BASE_API_URL}/catalog/item/${context.params.id}`
  );
  const itemDetail = await res.data;

  return {
    props: {
      itemDetail,
    },
  };
};

export default item_detail_info;
