import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import { useRouter } from "next/router";
import { Form, FormPadding, LoginForm } from "../../../styles";

const Update_form = ({ itemID, categoryList, storeList }) => {
  const router = useRouter();
  const [title, setTitle] = useState(itemID.item.title);
  const [category, setCategory] = useState(itemID.item.category[0]._id);
  const [store, setStore] = useState(itemID.item.store[0]._id);
  const [rating, setRating] = useState(itemID.item.rating);
  const [comment, setComment] = useState(itemID.item.comment);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `/api/v1/catalog/item/${router.query.id}/update`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, category, store, rating, comment }),
        }
      );
      router.push("/");
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
    <FormPadding>
      <LoginForm>
        <h1>Update Item</h1>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="itemName">Item Name:</label> */}
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Enter name of item"
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
              minLength="2"
              required
            />
          </div>

          <div>
            {/* <label htmlFor="itemName">Select Category:</label> */}
            <select
              value={category}
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value={itemID.category[0]._id}>
                {itemID.category[0].name}
              </option>
              {categoryList.map((value, index) => {
                return (
                  <option key={index} value={value._id}>
                    {value.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            {/* <label htmlFor="itemName">Select Store:</label> */}

            <select
              value={store}
              name="store"
              onChange={(e) => setStore(e.target.value)}
              required
            >
              <option value={itemID.store[0]._id}>
                {itemID.store[0].name}
              </option>
              {storeList.map((value, index) => {
                return (
                  <option key={index} value={value._id}>
                    {value.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            {/* <label htmlFor="itemName">Select a rating:</label> */}

            <select
              value={rating}
              name="rating"
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">Select a rating</option>
              <option value="Bad">Bad</option>
              <option value="Good">Good</option>
              <option value="Very Good">Very Good</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>

          <textarea
            placeholder="write a comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </LoginForm>
    </FormPadding>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `${BASE_API_URL}/catalog/item/${context.params.id}/update`
  );
  const itemID = await res.data;

  const response = await axios.get(`${BASE_API_URL}/catalog/categories`);
  const categoryList = await response.data;

  const resp = await axios.get(`${BASE_API_URL}/catalog/stores`);
  const storeList = await resp.data;

  return {
    props: {
      itemID,
      categoryList,
      storeList,
    },
  };
};

export default Update_form;
