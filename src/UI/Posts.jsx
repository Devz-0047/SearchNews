import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Post from "./Post";
import axios from "axios";

const fetchStories = async (page = 0) => {
  const url = "https://hn.algolia.com/api/v1/search";
  const params = {
    query: "",
    tags: "story",
    page,
    hitsPerPage: 20,
  };
  const response = await axios.get(url, { params });
  return response.data;
};

function Posts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 0;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["stories", currentPage],
    queryFn: () => fetchStories(currentPage),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  const handlePagechange = (newPage) => {
    setSearchParams({ page: newPage });
  };
  const totalPages = data.nbPages;
  return (
    <div>
      <ul>
        {data.hits.map((story) => (
          <li key={story.objectID}>
            <Post
              title={story.title}
              url={story.url}
              points={story.points}
              author={story.author}
              created_at={story.created_at}
              comments={story.children.length}
            />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-2 mb-4 text-sm">
        <button
          onClick={() => handlePagechange(currentPage - 1)}
          disabled={currentPage === 0}
          className={
            currentPage === 0
              ? "bg-gray-400 py-1 px-2"
              : "bg-orange-300 py-1 px-2 hover:bg-orange-400"
          }
        >
          <FaCircleChevronLeft />
        </button>
        <button
          className={
            currentPage + 1 === 1
              ? "px-2 py-[1px] bg-orange-300"
              : "px-2 py-[1px] bg-orange-200 hover:bg-orange-400"
          }
          onClick={() => handlePagechange(0)}
        >
          1
        </button>{" "}
        {[...Array(4)].map((_, index) => {
          const pageNum = index + 1;
          return (
            pageNum < totalPages && (
              <button
                key={pageNum}
                className={`px-2 py-[1px] ${
                  currentPage === pageNum
                    ? "bg-orange-300"
                    : "bg-orange-200 hover:bg-orange-400"
                }`}
                onClick={() => handlePagechange(pageNum)}
              >
                {pageNum + 1}
              </button>
            )
          );
        })}
        {totalPages > 6 && <p> ... </p>}
        <button
          className="px-2 py-[1px] bg-orange-200"
          onClick={() => handlePagechange(totalPages - 1)}
        >
          {totalPages}
        </button>
        <button
          onClick={() => handlePagechange(currentPage + 1)}
          disabled={!data.hits.length}
          className={
            currentPage === data.hits.length
              ? "bg-gray-400 py-1 px-2"
              : "bg-orange-300 hover:bg-orange-400 py-1 px-2"
          }
        >
          <FaCircleChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Posts;
