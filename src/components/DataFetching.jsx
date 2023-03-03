import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  //   const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [isClick, setIsClick] = useState(1);

  const handleClick = () => {
    setIsClick(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${isClick}`)
      .then((res) => {
        console.log(res);
        //   setPosts(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      <button onClick={handleClick}>Fetch Data</button>
      <div> {post.title}</div>
      {/* {posts.map((val) => {
        return <div key={val.id}>{val.userId}</div>;
      })} */}
    </div>
  );
};

export default DataFetching;
