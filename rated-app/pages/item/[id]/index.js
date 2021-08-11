import { useContext, useState } from "react";
import { Button, CardDiv, MainPadding } from "../../../styles";
import axios from "axios";
import { BASE_API_URL } from "../../api/constants";
import Link from "next/link";
import AuthContext from "../../../stores/authContext";
import { useRouter } from "next/router";

const item = ({ itemDetail }) => {
  const { user } = useContext(AuthContext);

  return (
    <MainPadding>
      <div>
        <h1>{itemDetail.title}</h1>
        <CardDiv>
          <h2>{itemDetail.title}</h2>
          <p>
            <span>Category: </span> {itemDetail.category[0].name}
          </p>
          <p>
            <span>Store: </span>
            {itemDetail.store[0].name}
          </p>
          <p>
            <span>Rating: </span>
            {itemDetail.rating}
          </p>

          <p>
            <span>Comment: </span>
            {itemDetail.comment}
          </p>
        </CardDiv>
        {user ? (
          <>
            <Link href={`/item/${itemDetail._id}/update`}>
              <Button>Update</Button>
            </Link>
            <Link href={`/item/${itemDetail._id}/delete`}>
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
  console.log("fetching");
  const id = context.params.id;
  const res = await fetch(`${BASE_API_URL}/catalog/item/${id}`);
  const itemDetail = await res.json();

  return {
    props: {
      itemDetail,
    },
  };
};

// export const getStaticPaths = async () => {
//   // Call an external API endpoint to get posts
//   const response = await fetch(`${BASE_API_URL}/catalog/items`);
//   const items = await response.json();

//   const paths = items.map((item) => ({ params: { id: item.toString() } }));

//   return { paths, fallback: true };
// };

export default item;
