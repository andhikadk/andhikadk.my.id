import RepoPreview from '@/components/RepoPreview';
import { getRepos } from '@/utils/getRepos';

const Repos = async () => {
  const repos = await getRepos('andhikadk');

  return (
    <section id='repo' className='mt-24'>
      <h2 className='font-medium text-center'>
        Recent <span className='font-bold accent'>Repos</span>
      </h2>
      <div className='grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3'>
        {repos.map((repo: any) => (
          <RepoPreview key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default Repos;
