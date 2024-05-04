import Hero from "../../components/Hero";
import Video from "../../components/Video"
import DetailServices from "../../components/DetailServices"

function Home() {
  return (
    <>
      <div className="lg:w-[80%] md:w-full">
        <Hero />
        <Video />        
        <DetailServices />
      </div>
    </>
  );
}

export default Home;
