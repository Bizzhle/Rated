import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import { useRouter } from "next/router";
import { Form, FormPadding, LoginForm, MainPadding } from "../../../styles";

const Update_form = ({ storeID }) => {
  const router = useRouter();
  const [name, setName] = useState(storeID.store.name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `/api/v1/catalog/store/${router.query.id}/update`,
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
    <FormPadding>
      <LoginForm>
        <h2>Update Store</h2>

        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="store_name">Stores:</label> */}
            <input
              type="text"
              name="store"
              value={name}
              onChange={handleChange}
            />
          </div>

          <button type="submit">submit</button>
        </form>
      </LoginForm>
    </FormPadding>
  );
};

export const getServerSideProps = async (context) => {
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
