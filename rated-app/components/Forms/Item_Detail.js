import { useEffect } from "react";
import Card from "../Card";
import Navbar from "../Navbar";
import { Main, CardInfo } from "../../styles";
import { useRouter } from "next/router";

const Item_Detail = ({ itemDetail }) => {
  console.log(itemDetail);

  // const router = useRouter();
  // const { id } = router.query;

  // async function getData() {
  //   const response = await axios.get(`${BASE_API_URL}/catalog/item/:id`);

  //   console.log(response.data);
  // }
  // // console.table(itemList);
  // useEffect(() => {
  //   console.log("fetching");
  //   getData();
  // }, []);

  // useEffect(() => {
  //   console.log("fetching");
  //   const fetchItems = async () => {
  //     const response = await axios.get(`${BASE_API_URL}/catalog/items`);
  //     console.log(response.data);
  //   };
  // }, [id]);

  function getArray(obj) {
    let itemArray = [];

    obj.forEach(function (item) {
      itemArray.push(
        <span key={Math.random()} className="px-1">
          {item.name}
        </span>
      );
    });
    return itemArray;
  }

  return (
    <>
      <div>
        <h2>{itemDetail.title}</h2>
        <CardInfo>
          <h3>{itemDetail.title}</h3>
          <p>{itemDetail.rating}</p>
          <span>
            <p>{itemDetail.category[0].name}</p>
            <p>{itemDetail.store[0].name}</p>
          </span>

          <p>{itemDetail.comment}</p>
        </CardInfo>
      </div>
    </>
  );
};

export default Item_Detail;
