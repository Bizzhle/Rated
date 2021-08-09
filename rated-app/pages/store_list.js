import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { BASE_API_URL } from "./api/constants";
import axios from "axios";
import { List, CardDiv, Button, ExtendList, MainPadding } from "../styles";
import AuthContext from "../stores/authContext";

const store_list = ({ storeList }) => {
  const { user } = useContext(AuthContext);
  const [displayList, setDisplayList] = useState(false);

  useEffect(() => {
    if (storeList.length > 0) {
      setDisplayList(!displayList);
    } else {
      setDisplayList(displayList);
    }
  }, []);
  return (
    <MainPadding>
      <h1>Stores</h1>
      {displayList ? "" : <p>There are no stores to display</p>}
      <>
        <ExtendList>
          {storeList &&
            storeList.map((value, index) => {
              return (
                <Link key={index} href={`/stores/${value._id}`}>
                  <CardDiv>
                    <li>{value.name}</li>
                  </CardDiv>
                </Link>
              );
            })}
        </ExtendList>
      </>

      {user ? (
        <Link href="/store_form">
          <Button>add a new store</Button>
        </Link>
      ) : (
        ""
      )}
    </MainPadding>
  );
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
