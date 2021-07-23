import React from "react";
import Store_Detail from "../../../components/Forms/Store_Detail";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";

const store_details = ({ storeDetail }) => {
  console.log(storeDetail);
  return <Store_Detail storeDetail={storeDetail} />;
};

export const getServerSideProps = async (context) => {
  console.log("fetching for stores");

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
