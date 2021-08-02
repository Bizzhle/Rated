import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import { useRouter } from "next/router";
import { Form, Button, FormPadding, LoginForm } from "../../../styles";

const Delete_form = ({ itemDeleteID }) => {
  const router = useRouter();
  const [title, setTitle] = useState(itemDeleteID.item.name);

  console.log(itemDeleteID);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("deleting");
      const res = await fetch(
        `${BASE_API_URL}/catalog/item/${router.query.id}/delete`,
        {
          method: "DELETE",
        }
      );
      router.push("/");
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data);
      }
    }
  };

  return (
    <FormPadding>
      <LoginForm>
        <h2>Delete {itemDeleteID.item.title}</h2>
        <p>Do you really want to delete this item?</p>
        <form>
          <Button onClick={handleSubmit}>Delete</Button>
        </form>
      </LoginForm>
    </FormPadding>
  );
};

export const getServerSideProps = async (context) => {
  console.log("fetching for item id");

  const res = await axios.get(
    `${BASE_API_URL}/catalog/item/${context.params.id}/delete`
  );
  const itemDeleteID = await res.data;

  return {
    props: {
      itemDeleteID,
    },
  };
};

export default Delete_form;
