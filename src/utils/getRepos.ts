export const getRepos = async (username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`
  );
  const repos = await response.json();
  return repos;
};
