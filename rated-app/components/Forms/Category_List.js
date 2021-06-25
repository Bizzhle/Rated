import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import styled from "@emotion/styled";
import { List, Button, CardDiv } from "../../styles";
import { BASE_API_URL } from "../../pages/api/constants";
import axios from "axios";

const Category_List = ({ categoryList }) => {
  return (
    <>
      <div>
        <h1>Category</h1>
        <div>
          <List>
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
          </List>
        </div>

        <Link href="/category_form">
          <Button>add a new category</Button>
        </Link>
      </div>
    </>
  );
};

export default Category_List;
