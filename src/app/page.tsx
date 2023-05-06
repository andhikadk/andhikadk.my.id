import Hero from '@/components/sections/Hero';
import Notes from '@/components/sections/Notes';
import Projects from '@/components/sections/Projects';
import Repos from '@/components/sections/Repos';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Notes />
      {/* @ts-expect-error Server Component */}
      <Repos />
    </>
  );
}
