const getRepos = async (username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=stars`
  );
  const repos = await response.json();
  return repos;
};
