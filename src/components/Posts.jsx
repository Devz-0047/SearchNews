// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { useSearchParams } from "react-router-dom";
// import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
// import Post from "./Post";
// import { setCurrentPage } from "../features/filter/filterSlice";

// import Spinner from "../UI/Spinner";
// import { fetchData } from "../hooks/fetchData";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// function Posts() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const dispatch = useDispatch();
//   const { type, sort, dateRange, currentPage, prefix, query } = useSelector(
//     (state) => state.filter
//   );
//   const queryClient = useQueryClient();
//   const pageFromParams = parseInt(searchParams.get("page")) || 0;

//   useEffect(() => {
//     if (pageFromParams !== currentPage) {
//       dispatch(setCurrentPage(pageFromParams));
//     }
//   }, [pageFromParams, currentPage, dispatch]);
//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: [type, sort, dateRange, currentPage, prefix, query],
//     queryFn: () => fetchData(type, sort, dateRange, currentPage, prefix, query),
//     keepPreviousData: true,
//     staleTime: 5 * 60 * 1000,
//     onSuccess: () => {
//       queryClient.invalidateQueries([
//         dateRange,
//         prefix,
//         query,
//         sort,
//         currentPage,
//         type,
//       ]);
//     },
//   });
//   if (isLoading)
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <Spinner />
//       </div>
//     );
//   if (isError) return <p>Error: {error.message}</p>;
//   const handlePagechange = (newPage) => {
//     setSearchParams({ page: newPage });
//   };
//   const totalPages = data.nbPages;
//   return (
//     <div>
//       <ul>
//         {data.hits.length === 0 ? (
//           <div className="flex items-center justify-center h-screen">
//             No Results Found
//           </div>
//         ) : (
//           data.hits.map((story) => (
//             <li key={story.objectID}>
//               <Post
//                 title={story.title}
//                 url={story.url}
//                 points={story.points}
//                 author={story.author}
//                 created_at={story.created_at}
//                 comments={story.children?.length || 0}
//               />
//             </li>
//           ))
//         )}
//       </ul>
//       <div className="flex items-center justify-center gap-2 pb-4 text-sm">
//         <button
//           onClick={() => handlePagechange(currentPage - 1)}
//           disabled={currentPage === 0}
//           className={
//             currentPage === 0
//               ? "bg-gray-400 py-1 px-2"
//               : "bg-orange-300 py-1 px-2 hover:bg-orange-400"
//           }
//         >
//           <FaCircleChevronLeft />
//         </button>
//         <button
//           className={
//             currentPage === 0
//               ? "px-2 py-[1px] bg-orange-300"
//               : "px-2 py-[1px] bg-orange-200 hover:bg-orange-400"
//           }
//           onClick={() => handlePagechange(0)}
//         >
//           1
//         </button>{" "}
//         {[...Array(4)].map((_, index) => {
//           const pageNum = index + 1;
//           return (
//             pageNum < totalPages && (
//               <button
//                 key={pageNum}
//                 className={`px-2 py-[1px] ${
//                   currentPage === pageNum
//                     ? "bg-orange-300"
//                     : "bg-orange-200 hover:bg-orange-400"
//                 }`}
//                 onClick={() => handlePagechange(pageNum)}
//               >
//                 {pageNum + 1}
//               </button>
//             )
//           );
//         })}
//         {totalPages > 6 && <p> ... </p>}
//         <button
//           className="px-2 py-[1px] bg-orange-200"
//           onClick={() => handlePagechange(totalPages - 1)}
//         >
//           {totalPages}
//         </button>
//         <button
//           onClick={() => handlePagechange(currentPage + 1)}
//           disabled={currentPage >= totalPages - 1}
//           className={
//             currentPage >= totalPages - 1
//               ? "bg-gray-400 py-1 px-2"
//               : "bg-orange-300 hover:bg-orange-400 py-1 px-2"
//           }
//         >
//           <FaCircleChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Posts;
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Post from "./Post";
import {
  setCurrentPage,
  setResultsCount,
  setSearchTime,
} from "../features/filter/filterSlice";

import Spinner from "../UI/Spinner";
import { fetchData } from "../hooks/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Posts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { type, sort, dateRange, currentPage, prefix, query, timeRange } =
    useSelector((state) => state.filter);
  // const queryClient = useQueryClient();

  const pageFromParams = parseInt(searchParams.get("page")) || 0;

  useEffect(() => {
    if (pageFromParams !== currentPage) {
      dispatch(setCurrentPage(pageFromParams));
    }
  }, [pageFromParams, currentPage, dispatch]);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [type, sort, dateRange, currentPage, prefix, query, timeRange],
    queryFn: () => {
      const startTime = Date.now(); // Start time logged within the query function
      return fetchData(query, sort, type, currentPage, 20).then((response) => {
        const timeTaken = (Date.now() - startTime) / 1000;
        console.log(`Search completed in ${timeTaken} seconds`);
        dispatch(setSearchTime(timeTaken)); // Only if you need it in the Redux store
        return response;
      });
    },
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });

  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: [type, sort, dateRange, currentPage, prefix, query, timeRange],
  //   queryFn: () => fetchData(query, sort, type, currentPage, 20),
  //   staleTime: 5 * 60 * 1000,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([
  //       dateRange,
  //       prefix,
  //       query,
  //       sort,
  //       currentPage,
  //       type,
  //       timeRange,
  //     ]);
  //     const endTime = Date.now();
  //     const timeTaken = (endTime - startTime) / 1000;
  //     console.log(`Search completed in ${timeTaken} seconds`);
  //     dispatch(setSearchTime(timeTaken));
  //   },
  // });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );

  if (isError) return <p>Error: {error?.message || data.error}</p>;

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  const totalPages = data.nbPages;
  dispatch(setResultsCount(data.nbHits));

  return (
    <div>
      <ul>
        {data.hits.length === 0 ? (
          <div className="flex items-center justify-center h-screen">
            No Results Found
          </div>
        ) : (
          data.hits.map((story) => (
            <li key={story.objectID}>
              <Post
                title={story.title}
                url={story.url}
                points={story.points}
                author={story.author}
                created_at={story.created_at}
                comments={story.children?.length || 0}
              />
            </li>
          ))
        )}
      </ul>
      <div className="flex items-center justify-center gap-2 pb-4 text-sm">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
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
            currentPage === 0
              ? "px-2 py-[1px] bg-orange-300"
              : "px-2 py-[1px] bg-orange-200 hover:bg-orange-400"
          }
          onClick={() => handlePageChange(0)}
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
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum + 1}
              </button>
            )
          );
        })}
        {totalPages > 6 && <p> ... </p>}
        <button
          className="px-2 py-[1px] bg-orange-200"
          onClick={() => handlePageChange(totalPages - 1)}
        >
          {totalPages}
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages - 1}
          className={
            currentPage >= totalPages - 1
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
