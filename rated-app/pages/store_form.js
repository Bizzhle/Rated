import { useState } from "react";
import { useRouter } from "next/router";
import { FormPadding, LoginForm } from "../styles";
import styled from "@emotion/styled";
import { BASE_API_URL } from "./api/constants";
import axios from "axios";

const store_form = ({ storeList }) => {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/v1/catalog/store/create`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      router.push("/store_list");
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data);
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
        <h2>Create a new store</h2>

        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="store_name">Stores:</label> */}
            <input
              list="stores"
              name="name"
              value={name}
              placeholder="Enter name of stores"
              autoComplete="off"
              onChange={handleChange}
              required
            />
            <datalist id="stores">
              {storeList.map((value, index) => {
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

export default store_form;

export const getServerSideProps = async () => {
  const res = await axios.get(`${BASE_API_URL}/catalog/stores`);
  const storeList = await res.data;

  return {
    props: {
      storeList,
    },
  };
};
