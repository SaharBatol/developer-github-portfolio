import { FaStar } from "react-icons/fa6";

const RepoCard = () => {
  return (
    <div className="repo-card">
      <h3 className="card-heading">Repo Name</h3>

      <p className="card-content">
        {"Description" || "No description provided."}
      </p>
      <div className="card-bottom-row">
        <p className="card-content">
          <strong>Language:</strong> {"Repo Language" || "N/A"}
        </p>
        <div className="rating-container">
          <FaStar color="gold" size={17} />
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
