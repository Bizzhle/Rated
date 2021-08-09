import { useState } from "react";
import { Form, FormPadding, LoginForm } from "../styles";
import { useRouter } from "next/router";
import { BASE_API_URL } from "./api/constants";

import axios from "axios";

const category_form = ({ categoryList }) => {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/v1/catalog/category/create`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      console.log(res);
      if (res.status === 200) {
        router.push("/category_list");
      }
    } catch (error) {
      if (err.response) {
        err.response.data;
        console.log("err", err.response.data);
      }
    }
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <FormPadding>
      <LoginForm>
        <h2>Create a category</h2>

        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="category">Category:</label> */}
            <input
              list="categories"
              name="name"
              value={name}
              placeholder="Enter a new category"
              autoComplete="off"
              onChange={handleChange}
              required
            />
            <datalist id="categories">
              {categoryList.map((value, index) => {
                return (
                  <option key={index} value={value.name}>
                    {value.name}
                  </option>
                );
              })}
            </datalist>
          </div>

          <button type="submit">submit</button>
        </form>
      </LoginForm>
    </FormPadding>
  );
};

export default category_form;

export const getServerSideProps = async () => {
  const response = await axios.get(`${BASE_API_URL}/catalog/categories`);
  const categoryList = await response.data;

  return {
    props: {
      categoryList,
    },
  };
};
