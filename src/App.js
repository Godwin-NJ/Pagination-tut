import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PageUI from "./component/PageUi";
import Pagination from "./component/Pagination";

const URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    fetchPost();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOffirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOffirstPost, indexOfLastPost);
  // console.log(currentPost);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const { data } = await axios(`${URL}`);
      setPost(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const paginate = (value) => setCurrentPage(value);
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3"> Blog</h1>
      <PageUI post={currentPost} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPost={post.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
