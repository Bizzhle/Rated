import { useEffect, useContext } from "react";
import { Button, CardDiv } from "../../styles";
import { useRouter } from "next/router";
import AuthContext from "../../stores/authContext";
import Link from "next/link";

const Item_Detail = ({ itemDetail }) => {
  const { user } = useContext(AuthContext);
  console.log(itemDetail);
  // function getArray(obj) {
  //   let itemArray = [];

  //   obj.forEach(function (item) {
  //     itemArray.push(
  //       <span key={Math.random()} className="px-1">
  //         {item.name}
  //       </span>
  //     );
  //   });
  //   return itemArray;
  // }

  return (
    <>
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
        {/* {user ? (
          <>
            <Button>Update</Button>
            <Button>Delete</Button>
          </>
        ) : (
          ""
        )} */}
        <Link href={`/itemx/${itemDetail._id}/update`}>
          <Button>Update</Button>
        </Link>
        <Link href={`/itemx/${itemDetail._id}/delete`}>
          <Button>Delete</Button>
        </Link>
      </div>
    </>
  );
};

export default Item_Detail;
