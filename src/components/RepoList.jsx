import { fetchGithubRepos } from "@/pages/api";
import RepoCard from "./RepoCard";
import { useEffect, useState } from "react";

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = "vercel";
    fetchGithubRepos(username)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setError(data.message || "Something went wrong");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <p>Loading repositories...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <main className="main-repo-container">
      <h1 className="heading">GitHub Repositories</h1>
      <input
        id="search-bar"
        type="text"
        placeholder="Search repositories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredRepos.length === 0 ? (
        <p className="subheading">No repositories found.</p>
      ) : (
        <div className="repo-card-container ">
          {filteredRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </main>
  );
};

export default RepoList;
