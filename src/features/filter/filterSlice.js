import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    type: "story",
    sort: "byDate",
    dateRange: "all",
    page: 0,
    prefix: false,
    query: "",
    resultsCount: 0,
    searchTime: 0,
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setDateRange: (state, action) => {
      state.dateRange = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
      state.prefix = true;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setResultsCount: (state, action) => {
      state.resultsCount = action.payload;
    },
    setSearchTime: (state, action) => {
      state.searchTime = action.payload;
    },
  },
});
export const {
  setType,
  setDateRange,
  setSort,
  setQuery,
  setPage,
  setResultsCount,
  setSearchTime,
} = filterSlice.actions;
export default filterSlice.reducer;
