import React from "react";

const PageUi = ({ loading, post }) => {
  if (loading) {
    return <h3>Loading....</h3>;
  }
  return (
    <div className="list-group mb-4">
      {post.map((singlePost) => {
        return (
          <li key={singlePost.id} className="list-group-item">
            {singlePost.title}
          </li>
        );
      })}
    </div>
  );
};

export default PageUi;
