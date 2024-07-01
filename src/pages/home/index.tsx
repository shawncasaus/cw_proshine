import Hero from "../../components/Hero";
import DetailServices from "../../components/DetailServices";
import Gallery from "../../components/Gallery";

function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Hero />
        <DetailServices />
        <Gallery />
      </div>
    </>
  );
}

export default Home;
