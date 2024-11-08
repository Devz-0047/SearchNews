import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Post({ title, url, points, author, created_at, comments }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["Post"],
    queryFn: async () => {
      const response = await axios.get("http://hn.algolia.com/api/v1/items/1");

      return response.data;
    },
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  function getTimeAgo(created_at) {
    const createdDate = new Date(created_at);
    const currentDate = new Date();

    const diffInMilliseconds = currentDate - createdDate;
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (diffInDays >= 365) {
      const years = Math.floor(diffInDays / 365);
      return years === 1 ? "1 year old" : `${years} years old`;
    } else if (diffInDays >= 30) {
      const months = Math.floor(diffInDays / 30);
      return months === 1 ? "1 month old" : `${months} months old`;
    } else {
      return diffInDays === 1 ? "1 day old" : `${diffInDays} days old`;
    }
  }

  return (
    <div className="pt-3">
      <div className="flex items-center gap-1 pl-3">
        <p className="text-sm">{`${data.title}`}</p>
        <a
          href={data.url}
          className="text-xs font-thin hover:underline-offset-auto"
        >
          {`(${data.url})`}
        </a>
      </div>
      <div className="pl-2 text-xs font-thin">
        <p>{`${data.points} points | ${data.author} | ${getTimeAgo(
          data.created_at
        )} | ${data.children.length} comments`}</p>
      </div>
    </div>
  );
}

export default Post;