import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BASE_API_URL } from "./api/constants";
import { List, Button, CardDiv, ExtendList, MainPadding } from "../styles";
import AuthContext from "../stores/authContext";
import Link from "next/link";

const category_list = ({ categoryList }) => {
  const { user } = useContext(AuthContext);
  const [displayList, setDisplayList] = useState(false);

  useEffect(() => {
    if (categoryList.length > 0) {
      setDisplayList(!displayList);
    } else {
      setDisplayList(displayList);
    }
  }, []);

  return (
    <MainPadding>
      <h1>Category</h1>
      {displayList ? "" : <p>There are no categories to display</p>}

      <>
        <ExtendList>
          {categoryList &&
            categoryList.map((value, index) => {
              return (
                <Link key={index} href={`/categorys/${value._id}`}>
                  <CardDiv>
                    <li>{value.name}</li>
                  </CardDiv>
                </Link>
              );
            })}
        </ExtendList>
      </>
      {user ? (
        <Link href="/category_form">
          <Button>add a new category</Button>
        </Link>
      ) : (
        ""
      )}
    </MainPadding>
  );
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
