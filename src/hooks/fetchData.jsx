// import axios from "axios";

// export const fetchData = async (
//   dateRange,
//   prefix,
//   query,
//   sort,
//   page,
//   tags,
//   hitsPerPage = 20
// ) => {
//   const url = "https://hn.algolia.com/api/v1/search";
//   const params = {
//     dateRange,
//     prefix,
//     query,
//     sort,
//     page,
//     tags,
//     hitsPerPage,
//   };
//   const response = await axios.get(url, { params });
//   return response.data;
// };
import axios from "axios";

export const fetchData = async (
  dateRange, // Used for date filtering
  prefix, // Not directly used, as Algolia API does not support this param
  query,
  sort, // Sorting by popularity or date
  page,
  tags = "", // Optional, default to empty string if not provided
  hitsPerPage = 20
) => {
  const url = "https://hn.algolia.com/api/v1/search";

  // Ensure query is not empty
  if (!query) {
    throw new Error("Query parameter is required.");
  }

  // Build params for the API request
  const params = {
    query,
    page,
    hitsPerPage,
  };

  // Add tags only if they are provided
  if (tags) {
    params.tags = tags;
  }

  // Add date filtering if dateRange is provided
  if (dateRange) {
    const numericFilters = [];

    if (dateRange === "last24h") {
      const last24h = Math.floor(Date.now() / 1000) - 24 * 60 * 60;
      numericFilters.push(`created_at_i>=${last24h}`);
    } else if (dateRange === "lastWeek") {
      const lastWeek = Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60;
      numericFilters.push(`created_at_i>=${lastWeek}`);
    }

    // Add numericFilters to params if any date filters are applied
    if (numericFilters.length > 0) {
      params.numericFilters = numericFilters.join(",");
    }
  }

  // Handle sorting if necessary, but avoid using unsupported `sortBy`
  if (sort === "byPopularity") {
    // If Algolia supports custom sorting, add it here
    // For now, remove sortBy as it's likely not valid in this context
  } else if (sort === "byDate") {
    // Sorting can be done using a custom ranking mechanism if needed
  }

  try {
    // Send the request
    const response = await axios.get(url, { params });
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw new Error(error.response?.data?.message || error.message); // Improve error handling
  }
};
