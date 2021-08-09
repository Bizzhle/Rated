import { useState, useEffect, useContext } from "react";
import { List, Main, MainPadding } from "../styles";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { BASE_API_URL } from "./api/constants";
import AuthContext from "../stores/authContext";
import Card from "../components/Card";

export default function Home({ itemList, categoryList, storeList, data }) {
  const { user } = useContext(AuthContext);
  const [displayList, setDisplayList] = useState(false);

  useEffect(() => {
    if (itemList.length > 0) {
      setDisplayList(!displayList);
    } else {
      setDisplayList(displayList);
    }
  }, []);
  return (
    <MainPadding>
      <h1>Items</h1>
      <List>
        {displayList ? "" : <p>There are no items to display</p>}
        {itemList &&
          itemList.map((value, index) => {
            return <Card key={index} value={value} />;
          })}
      </List>
    </MainPadding>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(`${BASE_API_URL}/catalog/items`);
  const itemList = await response.json();

  // const resp = await axios.get(`${BASE_API_URL}/catalog/categories`);
  // const categoryList = await resp.data;

  // const respond = await axios.get(`${BASE_API_URL}/catalog/stores`);
  // const storeList = await respond.data;

  return {
    props: {
      itemList,
      // categoryList,
      // storeList,
      // data: data && data,
    },
  };
};
