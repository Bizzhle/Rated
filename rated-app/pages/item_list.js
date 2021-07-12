import React from "react";
import Item_List from "../components/Forms/Item_List";
import axios from "axios";
import { BASE_API_URL } from "./api/constants";
import { Main, List, Button } from "../styles";
import Link from "next/link";
import AuthContext from "../stores/authContext";

const item_list = ({ itemList }) => {
  // const { user } = useContext(AuthContext);
  // if (user) {
  //   console.log("someone is logged in");
  // } else {
  //   console.log("nothing dey here");
  // }
  // console.log(user);

  console.log(itemList);
  return (
    <>
      <Item_List itemList={itemList} />
    </>
  );
};

export default item_list;
