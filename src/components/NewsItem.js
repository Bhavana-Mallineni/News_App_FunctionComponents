import React from "react";

export default function NewsItem(props) {
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            right: "0",
            position: "absolute",
          }}
        >
          <span className="badge rounded-pill bg-danger">
            {props.sourceName}
          </span>
        </div>

        <img src={props.imageUrl} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">
            {props.title} <span className="badge text-bg-secondary">New</span>
          </h5>
          <p className="card-text">{props.description}.</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {props.author} on {new Date(props.date).toGMTString()}
            </small>
          </p>
          <a
            href={props.newsUrl}
            target="_blank"
            className="btn btn-sm 
    btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
