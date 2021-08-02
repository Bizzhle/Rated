import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import { useRouter } from "next/router";
import { Form, Button, LoginForm, FormPadding } from "../../../styles";

const Delete_form = ({ storeDeleteID }) => {
  const router = useRouter();
  const [name, setName] = useState(storeDeleteID.store.name);
  const [items, setItems] = useState(false);

  useEffect(() => {
    if (storeDeleteID.store_items.length > 0) setItems(!items);
    else setItems(items);
  }, []);

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("deleting");
      const res = await fetch(
        `/api/v1/catalog/store/${router.query.id}/delete`,
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

  const viewItems = (
    <span>
      <p>Delete item(s) before you can delete the category</p>
      <ul>
        {storeDeleteID.store_items.map((value, index) => {
          return (
            <li key={index}>
              <h3>{value.title}</h3>
            </li>
          );
        })}
      </ul>
    </span>
  );

  const deleteCategory = (
    <form>
      <p>Do you really want to delete this category?</p>
      <Button onClick={handleSubmit}>Delete</Button>
    </form>
  );

  return (
    <FormPadding>
      <LoginForm>
        <h2>Delete Store: {storeDeleteID.store.name}</h2>
        {items ? viewItems : deleteCategory}
      </LoginForm>
    </FormPadding>
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
