import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useQuery } from "./test";

const PostDetails = () => {
  const [post, setPost] = useState({});

  // console.log("post:", post);
  const { id } = useParams();
  console.log("params", useParams());
  // console.log("setPost:", setPost);
  console.log("id:", id);
  // console.log("useParams:", useParams);
  // let query = useQuery();
  // const slug = query.get("slug");

  // console.log("query", slug);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, [id]);

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.userId}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
