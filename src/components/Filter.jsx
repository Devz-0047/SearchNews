import { IoShareSocialOutline } from "react-icons/io5";
import { setType, setSort, setDateRange } from "../features/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
function Filter() {
  const { type, sort, dateRange, resultsCount, searchTime } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between pt-3">
      <div className="flex items-center">
        <div className="flex items-center gap-2 pl-2">
          <label htmlFor="search" className="text-xs">
            Search
          </label>
          <select
            id="search"
            name="type"
            className="text-sm py-[2px] pl-[2px] "
            onChange={(e) => dispatch(setType(e.target.value))}
            value={type}
          >
            <option value="all">All</option>
            <option value="story">Stories</option>
            <option value="ask_hn">Ask HN</option>
            <option value="show_hn">Show HN</option>
            <option value="launch_hn">Launch Hn</option>
            <option value="job">Jobs</option>
            <option value="polls">Polls</option>
          </select>
        </div>
        <div className="flex items-center gap-2 pl-2">
          <label htmlFor="by" className="text-xs">
            by
          </label>
          <select
            id="by"
            name="sort"
            value={sort}
            className="text-sm py-[2px] pl-[2px]"
            onChange={(e) => dispatch(setSort(e.target.value))}
          >
            <option value="byPopularity">Popularity</option>
            <option value="byDate">Date</option>
          </select>
        </div>
        <div className="flex items-center gap-2 pl-2">
          <label htmlFor="for" className="text-xs">
            for
          </label>
          <select
            id="for"
            value={dateRange}
            name="dateRange"
            className="text-sm py-[2px] pl-[2px]"
            onChange={(e) => dispatch(setDateRange(e.target.value))}
          >
            <option value="all">All time</option>
            <option value="last24h">Last 24h</option>
            <option value="pastWeek">Past Week</option>
            <option value="pastMonth">Past Month</option>
            <option value="pastYear">Past Year</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 pr-2 text-xs">
        <p>
          {resultsCount} results ({searchTime} seconds)
        </p>
        <IoShareSocialOutline className="text-xl" />
      </div>
    </div>
  );
}

export default Filter;
