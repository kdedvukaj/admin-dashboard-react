import React from "react";
import { Link } from "react-router-dom";

function NewsList({ news }) {
  return (
    <>
      {news.map((newList) => {
        return (
          <div className="info-box" key={newList.id}>
            <div className="info-img">
              <img src={newList.src} alt="" />
            </div>
            <div className="info-details">
              <span>IZDAVANJE KNJIGE - 4 days ago</span>
              <p>
                <Link>{newList.admin}</Link> je izdala knjigu
                <b>{newList.book}</b> <Link>{newList.student}</Link> dana
                <b>{newList.date}</b>. <Link>pogledaj detalje...</Link>
              </p>
            </div>
          </div>
        );
      })}
      <div className="form-btn modal-btn show">
        <Link className="btn-secondary">Show More</Link>
      </div>
    </>
  );
}

export default NewsList;
