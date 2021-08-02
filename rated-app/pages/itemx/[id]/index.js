import { useContext } from "react";
import { Button, CardDiv, MainPadding } from "../../../styles";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import Link from "next/link";
import AuthContext from "../../../stores/authContext";

const item_detail_info = ({ itemDetail }) => {
  const { user } = useContext(AuthContext);

  return (
    <MainPadding>
      <div>
        <h1>{itemDetail.title}</h1>
        <CardDiv>
          <h3>{itemDetail.title}</h3>
          <p>
            <span>category: </span>
            {itemDetail.category[0].name}
          </p>
          <p>
            <span>store: </span>
            {itemDetail.store[0].name}
          </p>
          <p>
            <span>rating: </span>
            {itemDetail.rating}
          </p>

          <p>
            <span>comment: </span>
            {itemDetail.comment}
          </p>
        </CardDiv>
        {user ? (
          <>
            <Link href={`/itemx/${itemDetail._id}/update`}>
              <Button>Update</Button>
            </Link>
            <Link href={`/itemx/${itemDetail._id}/delete`}>
              <Button>Delete</Button>
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
    </MainPadding>
  );
};

export const getServerSideProps = async (context) => {
  console.log("fetching for item");

  const res = await axios.get(
    `${BASE_API_URL}/catalog/item/${context.params.id}`
  );
  const itemDetail = await res.data;

  return {
    props: {
      itemDetail,
    },
  };
};

export default item_detail_info;
