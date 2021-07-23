import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import { useRouter } from "next/router";
import { Form, Button } from "../../../styles";

const Delete_form = ({ storeDeleteID }) => {
  const router = useRouter();
  const [name, setName] = useState(storeDeleteID.store.name);

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("deleting");
      const res = await fetch(
        `${BASE_API_URL}/catalog/store/${router.query.id}/delete`,
        {
          method: "DELETE",
        }
      );
      router.push("/store_list");
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data);
      }
    }
  };

  return (
    <>
      <Form>
        <h2>Delete Store: {storeDeleteID.store.name}</h2>
        <p>Do you really want to delete this store</p>

        <form>
          <Button onClick={handleSubmit}>Delete</Button>
        </form>
      </Form>
    </>
  );
};

export const getServerSideProps = async (context) => {
  console.log("fetching for category id");

  const res = await axios.get(
    `${BASE_API_URL}/catalog/store/${context.params.id}/delete`
  );
  const storeDeleteID = await res.data;

  return {
    props: {
      storeDeleteID,
    },
  };
};

export default Delete_form;
