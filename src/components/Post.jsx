// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
//   const { data, error, isLoading } = useQuery({
//     queryKey: ["Post"],
//     queryFn: async () => {
//       const response = await axios.get("http://hn.algolia.com/api/v1/items/1");

//       return response.data;
//     },
//   });
//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   console.log(data);

// function Post({ title, url, points, author, created_at, comments }) {
//   function getTimeAgo(created_at) {
//     const createdDate = new Date(created_at);
//     const currentDate = new Date();

//     const diffInMilliseconds = currentDate - createdDate;
//     const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

//     if (diffInDays >= 365) {
//       const years = Math.floor(diffInDays / 365);
//       return years === 1 ? "1 year old" : `${years} years old`;
//     } else if (diffInDays >= 30) {
//       const months = Math.floor(diffInDays / 30);
//       return months === 1 ? "1 month old" : `${months} months old`;
//     } else {
//       return diffInDays === 1 ? "1 day old" : `${diffInDays} days old`;
//     }
//   }

//   return (
//     <div className="pt-3">
//       <div className="flex items-center gap-1 pl-3">
//         <p className="text-sm">{`${title}`}</p>
//         <a href={url} className="text-xs font-thin hover:underline-offset-auto">
//           {`(${url})`}
//         </a>
//       </div>
//       <div className="pl-2 text-xs font-thin">
//         <p>{`${points} points | ${author} | ${getTimeAgo(
//           created_at
//         )} | ${comments} comments`}</p>
//       </div>
//     </div>
//   );
// }

// export default Post;
function Post({
  title,
  url,
  points = 0,
  author = "Unknown",
  created_at,
  comments = 0,
}) {
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
        <p className="text-sm">{title || "No title available"}</p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-thin hover:underline-offset-auto"
          >
            {`(${url})`}
          </a>
        )}
      </div>
      <div className="pl-3 text-xs font-thin">
        <p>{`${points} points | ${author} | ${getTimeAgo(
          created_at
        )} | ${comments} comments`}</p>
      </div>
    </div>
  );
}

export default Post;
