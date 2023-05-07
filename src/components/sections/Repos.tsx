import RepoPreview from '@/components/RepoPreview';
import { getRepos } from '@/utils/getRepos';

const Repos = async () => {
  const repos = await getRepos('andhikadk');

  return (
    <section id='repo' className='mt-24'>
      <h2 className='text-center font-medium'>
        Recent <span className='accent font-bold'>Repos</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        {repos.map((repo: any) => (
          <RepoPreview key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default Repos;
