import Hero from '@/components/sections/Hero';
import Notes from '@/components/sections/Notes';
import Projects from '@/components/sections/Projects';
import Repo from '@/components/sections/Repo';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Notes />
      <Repo />
    </>
  );
}
