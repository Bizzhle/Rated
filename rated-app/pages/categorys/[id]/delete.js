import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import { useRouter } from "next/router";
import { Form, Button } from "../../../styles";

const Delete_form = ({ categoryDeleteID }) => {
  const router = useRouter();
  const [name, setName] = useState(categoryDeleteID.category.name);

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("deleting");
      const res = await fetch(
        `${BASE_API_URL}/catalog/category/${router.query.id}/delete`,
        {
          method: "DELETE",
        }
      );
      router.push("/category_list");
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data);
      }
    }
  };

  return (
    <>
      <Form>
        <h2>Delete {categoryDeleteID.category.name}</h2>
        <p>Do you really want to delete this category</p>
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
    `${BASE_API_URL}/catalog/category/${context.params.id}/delete`
  );
  const categoryDeleteID = await res.data;

  return {
    props: {
      categoryDeleteID,
    },
  };
};

export default Delete_form;
