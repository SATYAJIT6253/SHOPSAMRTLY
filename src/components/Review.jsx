import React from "react";
import "./review.css";
import Customerreview from "./subcomponents'/Customerreview";
function Review() {
  const reviews = [
    {
      id: 1,
      name: "ddsgds sdhjgsdsd",
      image:
        "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      username:'@hfhdfdfdf',
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore animi, recusandae, blanditiis facilis hic inventore minima harum magnam earum architecto mollitia fuga?",
    },
    {
      id: 2,
      name: "ddsgds sdhjgsdsd",
      username:'@hfhdfdfdf',
      image:
        "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore animi, recusandae, blanditiis facilis hic inventore minima harum magnam earum architecto mollitia fuga?",
    },
    {
      id: 3,
      name: "ddsgds sdhjgsdsd",
      username:'@hfhdfdfdf',
      image:
        "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore animi, recusandae, blanditiis facilis hic inventore minima harum magnam earum architecto mollitia fuga?",
    },
    {
      id: 4,
      name: "ddsgds sdhjgsdsd",
      username:'@hfhdfdfdf',
      image:
        "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore animi, recusandae, blanditiis facilis hic inventore minima harum magnam earum architecto mollitia fuga?",
    },
    {
      id: 5,
      name: "ddsgds sdhjgsdsd",
      image:
        "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      username:'@hfhdfdfdf',
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore animi, recusandae, blanditiis facilis hic inventore minima harum magnam earum architecto mollitia fuga?",
    },
    {
      id: 6,
      name: "ddsgds sdhjgsdsd",
      username:'@hfhdfdfdf',
      image:
        "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore animi, recusandae, blanditiis facilis hic inventore minima harum magnam earum architecto mollitia fuga?",
    },
    {
      id: 7,
      name: "ddsgds sdhjgsdsd",
      username:'@hfhdfdfdf',
      image:
        "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore animi, recusandae, blanditiis facilis hic inventore minima harum magnam earum architecto mollitia fuga?",
    },
    {
      id: 8,
      name: "ddsgds sdhjgsdsd",
      username:'@hfhdfdfdf',
      image:
        "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore animi, recusandae, blanditiis facilis hic inventore minima harum magnam earum architecto mollitia fuga?",
    },
    {
      id: 9,
      name: "ddsgds sdhjgsdsd",
      username:'@hfhdfdfdf',
      image:
        "https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore animi, recusandae, blanditiis facilis hic inventore minima harum magnam earum architecto mollitia fuga?",
    },
  ];
  return (
    <div>
      <h1 className="review-heading">What Customer says About us</h1>
      <div className="review-container">
        {reviews.map((review) => (
          <Customerreview
            id={review.id}
            name={review.name}
            review={review.review}
            image={review.image}
            username={review.username}
          />
        ))}
      </div>
    </div>
  );
}

export default Review;
