import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// export function useQuery() {
//   const { search } = useLocation();

//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(posts);
  return (
    <section>
      <div className="container">
        <div className="posts">
          {posts?.map((val) => {
            return (
              <div key={val.id}>
                <Link to={`/post/${val.id} `}>{val.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Posts;
