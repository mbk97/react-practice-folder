import axios from "axios";
import React, { useState, useEffect } from "react";

const PaginationRender = () => {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPage] = useState(20);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   get current post

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

  //   console.log(currentPost);

  console.log(indexOfLastPost, indexOfFirstPost, "RESULT HERE");

  let pageNumbers = [];

  // let NumOfTotalPost = Post.length;

  for (let i = 0; i <= Math.ceil(post.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers, "Page numbers here");

  return (
    <div className="mt-6">
      <h1 className="font-bold text-[32px] text-center grid place-items-center">
        Pagination Component
      </h1>
      {loading && <h3 className="text-center">Loading...</h3>}

      {post.length !== 0 ? (
        <div>
          <div className=" flex flex-wrap gap-4 justify-center">
            {currentPost.map((post) => {
              return (
                <div className="bg-[rgba(0,0,0,0.2)] p-2 h-[auto] w-[300px] mt-5">
                  <h3 className="font-bold">{post.title.slice(0, 30)}</h3>
                  <p>{post.body.slice(0, 40)}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between w-[400px] mt-2">
            {pageNumbers.map((PageNumber) => (
              <div
                key={PageNumber}
                onClick={() => {
                  setCurrentPage(PageNumber);
                }}
                className={
                  PageNumber === currentPage
                    ? " p-2 px-3 text-white bg-green-700 focus:ring hover:bg-pink-800 cursor-pointer" //this css when selcted
                    : "p-2 px-3 text-white bg-pink-600 focus:ring hover:bg-pink-800 cursor-pointer"
                }
              >
                {PageNumber}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-[30px] gap-5">
            <button
              className="bg-[blue] text-[white] rounded-[10px] w-[120px] h-[45px]"
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              Prev
            </button>
            <button
              className="bg-[blue] text-[white] rounded-[10px] w-[120px] h-[45px]"
              onClick={() => {
                if (currentPage < pageNumbers.length) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PaginationRender;
