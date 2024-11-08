import Navbar from "../UI/Navbar";
import Filter from "../UI/Filter";
import Post from "../UI/Post";
function Home() {
  return (
    <div className="bg-[#F6F6EF]">
      <Navbar />
      <Filter />
      <Post />
    </div>
  );
}

export default Home;
