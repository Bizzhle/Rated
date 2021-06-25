import React from "react";
import ItemForm from "../components/Forms/ItemForm";
import { BASE_API_URL } from "./api/constants";
import axios from "axios";

const item_form = ({ storeList, categoryList }) => {
  return <ItemForm storeList={storeList} categoryList={categoryList} />;
};

export default item_form;

export const getServerSideProps = async () => {
  const response = await axios.get(`${BASE_API_URL}/catalog/categories`);
  const categoryList = await response.data;

  const res = await axios.get(`${BASE_API_URL}/catalog/stores`);
  const storeList = await res.data;

  return {
    props: {
      categoryList,
      storeList,
    },
  };
};
