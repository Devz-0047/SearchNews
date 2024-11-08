import { IoShareSocialOutline } from "react-icons/io5";
function Filter() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center gap-2 pl-2">
          <label htmlFor="search" className="text-xs">
            Search
          </label>
          <select name="search" className="text-sm py-[2px] pl-[2px]">
            <option value="All">All</option>
            <option value="Stories">Stories</option>
            <option value="Ask HN">Ask HN</option>
            <option value="Show HN">Show HN</option>
            <option value="Launch HN">Launch Hn</option>
            <option value="Jobs">Jobs</option>
            <option value="Polls">Polls</option>
          </select>
        </div>
        <div className="flex items-center gap-2 pl-2">
          <label htmlFor="by" className="text-xs">
            by
          </label>
          <select name="by" className="text-sm py-[2px] pl-[2px]">
            <option value="Popularity">Popularity</option>
            <option value="Date">Date</option>
          </select>
        </div>
        <div className="flex items-center gap-2 pl-2">
          <label htmlFor="by" className="text-xs">
            for
          </label>
          <select name="for" className="text-sm py-[2px] pl-[2px]">
            <option value="All time">All time</option>
            <option value="Last 24h">Last 24h</option>
            <option value="Past Week">Past Week</option>
            <option value="Past Month">Past Month</option>
            <option value="Past Year">Past Year</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 pr-2 text-xs">
        <p>X results (X seconds)</p>
        <IoShareSocialOutline className="text-xl" />
      </div>
    </div>
  );
}

export default Filter;
