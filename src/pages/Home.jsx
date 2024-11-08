import Navbar from "../UI/Navbar";
import Filter from "../UI/Filter";
// import Post from "../UI/Post";
import Posts from "../UI/Posts";
function Home() {
  return (
    <div className="bg-[#F6F6EF]">
      <Navbar />
      <Filter />
      <Posts />
    </div>
  );
}

export default Home;
