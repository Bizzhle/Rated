import React from "react";
import Store_List from "../components/Forms/Store_List";
import { BASE_API_URL } from "./api/constants";
import axios from "axios";

const store_list = ({ storeList }) => {
  return <Store_List storeList={storeList} />;
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(`${BASE_API_URL}/catalog/stores`);
  const storeList = await res.data;

  return {
    props: {
      storeList,
    },
  };
};

export default store_list;
