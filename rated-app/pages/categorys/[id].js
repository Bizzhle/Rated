import React from "react";
import Category_Detail from "../../components/Forms/Category_Detail";
import axios from "axios";
import { BASE_API_URL } from "../api/constants";

const category_detail = ({ categoryDetail }) => {
  console.log(categoryDetail);
  return <Category_Detail categoryDetail={categoryDetail} />;
};

export const getServerSideProps = async (context) => {
  console.table("fetching for category");

  const res = await axios.get(
    `${BASE_API_URL}/catalog/category/${context.params.id}`
  );
  const categoryDetail = await res.data;

  return {
    props: {
      categoryDetail,
    },
  };
};

export default category_detail;
