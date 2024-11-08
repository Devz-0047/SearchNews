import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
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
  return (
    <div>
      {data.hits.map((story) => (
        <Post
          key={story.objectID}
          title={story.title}
          url={story.url}
          points={story.points}
          author={story.author}
          created_at={story.created_at}
          comments={story.children.length}
        />
      ))}
    </div>
  );
}

export default Posts;
