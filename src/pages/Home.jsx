import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Posts from "../components/Posts";
import { useIsAuthenticated, useLogin } from "../features/auth/auth";
import { useEffect, useState } from "react";
import Spinner from "../UI/Spinner";
import { useAuth0 } from "@auth0/auth0-react"; // Assuming you're using Auth0

function Home() {
  const { isLoading } = useAuth0(); // Using the Auth0 hook
  const [redirecting, setRedirecting] = useState(false);
  const isAuthenticated = useIsAuthenticated();
  const login = useLogin();

  useEffect(() => {
    console.log("isAuthenticated: ", isAuthenticated);
    if (!isAuthenticated && !redirecting && !isLoading) {
      setRedirecting(true);
      login();
    }
  }, [isAuthenticated, login, redirecting, isLoading]);

  if (isLoading || !isAuthenticated) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#F6F6EF]">
      <Navbar />
      <Filter />
      <Posts />
    </div>
  );
}

export default Home;
