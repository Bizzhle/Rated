import { useState } from "react";
import axios from "axios";
import { Main, Form } from "../../styles";
import { BASE_API_URL } from "../../pages/api/constants";
import { useRouter } from "next/router";

const Store_form = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  // const [errors, setErrors] = useState(false);
  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_API_URL}/catalog/store/create`, {
        name,
      });
      console.log(res);
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data);
      }
    }
    setName("");
    router.push("/store_list");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <h2>Create a new store</h2>
      <Form>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="store_name">Stores:</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter name of stores"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>

          <input type="submit" />
        </form>
      </Form>
    </>
  );
};

export default Store_form;
