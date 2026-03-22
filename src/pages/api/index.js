export const fetchGithubRepos = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`);
};
