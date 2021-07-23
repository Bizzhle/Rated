import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { List, Button, CardDiv, ExtendList } from "../../styles";
import AuthContext from "../../stores/authContext";

const Category_List = ({ categoryList }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div>
        <h1>Category</h1>
        <div>
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
        </div>
        {user ? (
          <Link href="/category_form">
            <Button>add a new category</Button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Category_List;
