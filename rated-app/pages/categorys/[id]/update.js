import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import { useRouter } from "next/router";
import { Form } from "../../../styles";

const Update_form = ({ categoryID }) => {
  const router = useRouter();
  const [name, setName] = useState(categoryID.category.name);

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${BASE_API_URL}/catalog/category/${router.query.id}/update`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        }
      );
      router.push("/category_list");
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data);
      }
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h2>Update Category</h2>
      <Form>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="category_name">Category:</label>
            <input
              type="text"
              name="category"
              value={name}
              onChange={handleChange}
            />
          </div>

          <input type="submit" />
        </form>
      </Form>
    </>
  );
};

export const getServerSideProps = async (context) => {
  console.log("fetching for category id");

  const res = await axios.get(
    `${BASE_API_URL}/catalog/category/${context.params.id}/update`
  );
  const categoryID = await res.data;

  return {
    props: {
      categoryID,
    },
  };
};

export default Update_form;
