import getProjectMetadata from '@/utils/getProjectMetadata';

import NotFound from './not-found';
import ProjectMetadata from './ProjectMetadata';

const ProjectDetail = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const project = getProjectMetadata(params.slug)[0];
  if (!project) {
    return <NotFound />;
  }

  return <ProjectMetadata {...project} />;
};

export default ProjectDetail;
