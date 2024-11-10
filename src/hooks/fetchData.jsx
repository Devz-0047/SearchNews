import axios from "axios";

export const fetchData = async (page = 0) => {
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
