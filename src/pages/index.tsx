import type { NextPage } from 'next';
import Header from './Header';
import Hero from './Hero';
const Home: NextPage = () => {
  return (
    <div className="h-full min-h-screen w-screen bg-[#23252F] text-white">
      {/* Add Awareness header about Tigray */}
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
