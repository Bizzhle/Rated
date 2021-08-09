import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import { useRouter } from "next/router";
import { Form, Button, FormPadding, LoginForm } from "../../../styles";

const Delete_form = ({ categoryDeleteID }) => {
  const router = useRouter();
  const [name, setName] = useState(categoryDeleteID.category.name);
  const [items, setItems] = useState(false);

  useEffect(() => {
    if (categoryDeleteID.category_items.length > 0) setItems(!items);
    else setItems(items);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `/api/v1/catalog/category/${router.query.id}/delete`,
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

  const viewItems = (
    <span>
      <p>Delete item(s) before you can delete the category</p>
      <ul>
        {categoryDeleteID.category_items.map((value, index) => {
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
        <h2>Delete {categoryDeleteID.category.name}</h2>

        {items ? viewItems : deleteCategory}
      </LoginForm>
    </FormPadding>
  );
};

export const getServerSideProps = async (context) => {
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
