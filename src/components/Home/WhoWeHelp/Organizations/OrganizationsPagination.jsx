import React, {useState} from "react";
import ReactPaginate from 'react-paginate';
import JsonData from './organizationsData.json';


function Organizations() {
  const [posts, setPosts] = useState(JsonData.slice(0, 10));
  const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 3;
  const pagesVisited = pageNumber * postsPerPage;

  const displayPosts = posts
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
      return (
        <div className="post">
        <div className="post__wrapper">
          <h3 className="post__title">Organizacja "{post.name}"</h3>
          <p className="post__desc">{post.desc}</p>
        </div>
        <p className='post__things'>{post.things}</p>
        </div>
      );
    });

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {displayPosts}
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}

export default Organizations;