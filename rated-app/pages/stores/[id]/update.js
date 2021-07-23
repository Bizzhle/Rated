import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import { useRouter } from "next/router";
import { Form } from "../../../styles";

const Update_form = ({ storeID }) => {
  const router = useRouter();
  const [name, setName] = useState(storeID.store.name);

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${BASE_API_URL}/catalog/store/${router.query.id}/update`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        }
      );
      router.push("/store_list");
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data);
      }
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);

    // setName((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <h2>Update Store</h2>
      <Form>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="store_name">Stores:</label>
            <input
              type="text"
              name="store"
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
  console.log("fetching for store id");

  const res = await axios.get(
    `${BASE_API_URL}/catalog/store/${context.params.id}/update`
  );
  const storeID = await res.data;

  return {
    props: {
      storeID,
    },
  };
};

export default Update_form;
