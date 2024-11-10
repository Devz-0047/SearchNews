import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
// import Post from "../UI/Post";
import Posts from "../components/Posts";
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
