import React, { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../pages/api/constants";

import { Form, Main } from "../../styles";

const ItemForm = ({ storeList, categoryList }) => {
  const [storeItems, setStoreItems] = useState(storeList);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [store, setStore] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("tried to submit");

    try {
      const res = await axios.post(`${BASE_API_URL}/catalog/item/create`, {
        title,
        category,
        store,
        rating,
        comment,
      });
      console.log(res);
    } catch (err) {
      if (err.response) {
        err.response.data;
        console.log(err.response.data);
      }
    }
    setTitle("");
    setCategory("");
    setStore("");
    setRating("");
    setComment("");
  };

  return (
    <>
      <h2>Create a new Item</h2>
      <Form>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="itemName">Item Name:</label>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Enter name of item"
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="itemName">Select Category:</label>
            <select
              value={category}
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
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
            <label htmlFor="itemName">Select Store:</label>

            <select
              value={store}
              name="store"
              onChange={(e) => setStore(e.target.value)}
            >
              <option value="">select a store</option>
              {storeItems.map((value, index) => {
                return (
                  <option key={index} value={value._id}>
                    {value.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="itemName">Select a rating:</label>

            <select
              value={rating}
              name="rating"
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">chose a rating</option>
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
      </Form>
    </>
  );
};

export default ItemForm;
