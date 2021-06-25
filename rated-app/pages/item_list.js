import React from "react";
import Item_List from "../components/Forms/Item_List";
import axios from "axios";
import { BASE_API_URL } from "./api/constants";
import { Main, List, Button } from "../styles";
import Link from "next/link";
import card from "./card";

const item_list = ({ itemList }) => {
  console.log(itemList);
  return (
    <>
      <Item_List itemList={itemList} />
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const res = await axios.get(`${BASE_API_URL}/catalog/items`);
//   const itemList = await res.data;

//   return {
//     props: {
//       itemList,
//     },
//   };
// };

export default item_list;
