import React from "react";
import Item_Detail from "../../components/Forms/Item_Detail";
import axios from "axios";
import { BASE_API_URL } from "../api/constants";
import { useRouter } from "next/router";
import { Main, List, Button } from "../../styles";
import Link from "next/link";

const item_detail_info = ({ itemDetail }) => {
  console.log(itemDetail);
  // const router = useRouter();
  // const { item_detail } = router.query;
  // // console.log(item_detail);
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
