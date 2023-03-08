import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "./test";
import "./dataFetching.scss";
// import PostDetails from "./PostDetails";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  // const [id, setId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isClick, setIsClick] = useState();
  // console.log("isclick", isClick);

  // const handleClick = () => {
  //   setIsClick(id);
  // };
  const handlesClick = (val) => {
    // setIsClick(val);
    setLoading(true);

    console.log("val", val);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${val.id}`)
      .then((res) => {
        console.log("res", res);
        // setPosts(res.data);
        setIsClick(res.data);
        // setIsLoading(false);
        setLoading(false);
      });
  };

  let query = useQuery();
  const slug = query.get("slug");

  // console.log("query", slug);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        setIsLoading(false);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        // setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="post-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {/* <select name="" id=""> */}
            {/* <option value="">select any option</option> */}
            {posts?.map((val) => {
              // console.log("first", val);
              return (
                <div key={val.id}>
                  {/* <Link to={`/post/$val.id`}> {val.title}</Link> */}
                  <Link
                    to={`?slugs=${val.id} `}
                    onClick={(e) => {
                      e.preventDefault();
                      handlesClick(val);
                    }}
                  >
                    {val.title}
                  </Link>
                  {/* <Link to={`/post/${val.id}`}>{val.title}</Link> */}
                </div>
              );
            })}
            {/* </select> */}
          </div>
        )}
      </div>

      {slug && <h1>Details</h1>}
      <div className="post-details">
        <div>
          {loading ? (
            <p>LOADING...</p>
          ) : (
            <div>
              {isClick && (
                <div>
                  <h2>{isClick.title}</h2>
                  <h2>{isClick.body}</h2>
                  <h2>{isClick.id}</h2>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataFetching;
{
  /* <input type="text" value={id} onChange={(e) => setId(e.target.value)} /> */
}

{
  /* <button onClick={handleClick}>Fetch Data</button> */
}
