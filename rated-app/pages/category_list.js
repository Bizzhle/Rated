import React from "react";
import Category_List from "../components/Forms/Category_List";
import axios from "axios";
import { BASE_API_URL } from "./api/constants";

const category_list = ({ categoryList }) => {
  console.table(categoryList);
  return <Category_List categoryList={categoryList} />;
};

export default category_list;

export const getServerSideProps = async (context) => {
  const res = await axios.get(`${BASE_API_URL}/catalog/categories`);
  const categoryList = await res.data;

  return {
    props: {
      categoryList,
    },
  };
};
