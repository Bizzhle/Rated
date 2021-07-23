import { useState, useContext } from "react";

import Link from "next/link";
import styled from "@emotion/styled";
import { List, CardDiv, Button, ExtendList } from "../../styles";
import AuthContext from "../../stores/authContext";

const Store_List = ({ storeList }) => {
  const { user } = useContext(AuthContext);

  console.log(storeList);
  return (
    <>
      <div>
        <h1>Stores</h1>
        <div>
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
        </div>

        {user ? (
          <Link href="/store_form">
            <Button>add a new store</Button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Store_List;
