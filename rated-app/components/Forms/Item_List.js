import { useState, useEffect } from "react";

import Link from "next/link";

import { Main, List, Button } from "../../styles";

import Card from "../Card";

const Item_List = ({ children, itemList }) => {
  const [state, setstate] = useState(itemList);
  console.log(state);
  // const router = useRouter();
  // const { id } = router.query;
  // const [itemList, setItemList] = useState([]);

  // async function getData() {
  //   const response = await axios.get(`${BASE_API_URL}/catalog/items`);

  //   setItemList(response.data);
  // }
  // console.table(itemList);
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <h1>Items</h1>
      <List>
        {itemList &&
          itemList.map((value, index) => {
            return <Card key={index} value={value} />;
          })}
      </List>
      {children}
    </div>
  );
};

export default Item_List;
