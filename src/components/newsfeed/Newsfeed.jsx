import React from "react";
import NewsList from "../newsfeed-list/NewsList";

function Newsfeed() {
  const rows = [
    {
      id: 1,
      admin: "Valentina K",
      src: "./img/profile-valentina.jpg",
      book: "Tom Sojer",
      student: "Pero Perovicu",
      date: "21.02.2021",
      action: "rent",
    },
    {
      id: 2,
      admin: "Zana K",
      src: "./img/prof-two.jpg",
      book: "Tom Sojer",
      student: "Nikolini Nikolic",
      date: "23.05.2021",
      action: "rent",
    },
    {
      id: 3,
      admin: "Valentina K",
      src: "./img/profile-valentina.jpg",
      book: "Tom Sojer",
      student: "Miju Mijovic",
      date: "1.02.2021",
      action: "rent",
    },
    {
      id: 4,
      admin: "Zana K",
      src: "./img/prof-two.jpg",
      book: "Tom Sojer",
      student: "Pero Perovicu",
      date: "15.12.2021",
      action: "rent",
    },
    {
      id: 5,
      admin: "Valentina K",
      src: "./img/profile-valentina.jpg",
      book: "Tom Sojer",
      student: "Miju Mijovic",
      date: "1.02.2021",
      action: "rent",
    },
    {
      id: 6,
      admin: "Zana K",
      src: "./img/prof-two.jpg",
      book: "Tom Sojer",
      student: "Pero Perovicu",
      date: "15.12.2021",
      action: "rent",
    },
  ];
  return (
    <div className="box-one">
      <h2>AKTIVNOSTI</h2>
      <div className="info-group">
        <NewsList news={rows} />
      </div>
    </div>
  );
}

export default Newsfeed;
