import { CardInfo, CardDiv } from "../styles";

import Link from "next/link";
import styled from "@emotion/styled";

const Card = ({ value }) => {
  console.log(value);
  // const [itemDetail, setItemDetail] = useState([]);

  // async function getData() {
  //   const response = await axios.get(`${BASE_API_URL}/catalog/item/:id`);

  //   console.log(response.data);
  // }

  // useEffect(() => {
  //   getData();
  // }, [id]);

  return (
    <Link href={`/itemx/${value._id}`}>
      <CardDiv>
        <p>{value.title}</p>
        <p>{value.category[0].name}</p>
      </CardDiv>
    </Link>
  );
};

export default Card;
