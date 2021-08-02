import { useState } from "react";
import { Form, FormPadding, LoginForm } from "../styles";
import { useRouter } from "next/router";
import { BASE_API_URL } from "./api/constants";

const category_form = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  console.log(name);

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
      router.push("/category_list");
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
              type="text"
              name="name"
              value={name}
              placeholder="Enter a new category"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">submit</button>
        </form>
      </LoginForm>
    </FormPadding>
  );
};

export default category_form;
