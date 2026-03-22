import { FaStar } from "react-icons/fa6";

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
      <h3 className="card-heading">{repo.name}</h3>

      <p className="card-content">
        {repo.description || "No description provided."}
      </p>
      <div className="card-bottom-row">
        <p className="card-content">
          <strong>Language:</strong> {repo.language || "N/A"}
        </p>
        <div className="rating-container">
          <FaStar color="gold" size={17} />
          <p>{repo.stargazers_count}</p>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
