import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
// export function useQuery() {
//   const { search } = useLocation();

//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);

  const [currentPage, setCurrentPage] = useState(7);
  const [postsPerPage, setPostsPerPage] = useState(10);
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
  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  console.log("first", indexOfFirstPost);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <section>
      <div className="container">
        <div className="posts">
          {currentPosts?.map((val) => {
            return (
              <div key={val.id}>
                <Link to={`/post/${val.id} `}>{val.title}</Link>
              </div>
            );
          })}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  );
};

export default Posts;
