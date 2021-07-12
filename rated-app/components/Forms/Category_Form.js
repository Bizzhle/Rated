import { useState } from "react";
import { Main, Form } from "../../styles";
import { BASE_API_URL } from "../../pages/api/constants";
import axios from "axios";
import { useRouter } from "next/router";

const Category_Form = () => {
  const router = useRouter();
  const [name, setName] = useState([]);
  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_API_URL}/catalog/category/create`, {
        name,
      });
      console.log(res);
    } catch (err) {
      if (err.response) {
        err.response.data;
        console.log("err", err.response.data);
      }
    }
    setName("");
    router.push("/category_list");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>Create a category</h1>
      <Form>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="category">Category:</label>
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
      </Form>
    </>
  );
};

export default Category_Form;
