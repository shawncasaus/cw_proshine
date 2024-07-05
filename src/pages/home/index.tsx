import Hero from "../../components/Hero";
import DetailServices from "../../components/DetailServices";
import Reviews from "../../components/Reviews";

function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Hero />
        <DetailServices />
        <Reviews />
      </div>
    </>
  );
}

export default Home;
